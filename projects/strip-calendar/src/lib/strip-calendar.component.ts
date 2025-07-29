import { Component, OnInit, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { startOfMonth, endOfMonth, eachDayOfInterval, subMonths, addMonths, isSameDay } from 'date-fns';


@Component({
    selector: 'ngx-strip-calendar',
    imports: [CommonModule],
    templateUrl: './strip-calendar.html',
    styleUrls: ['./strip-calendar.scss']
})
export class StripCalendarComponent implements OnInit {
  @ViewChild('dateCon') datesContainer!: ElementRef;

  currentMonth: any = undefined;
  selectedDate: any = new Date();

  @Output() onDateChange = new EventEmitter<any>();

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.createDateArray(new Date());
  }

  createDateArray(date: Date): void {
    const startOfCurrentMonth = startOfMonth(date);
    const endOfCurrentMonth = endOfMonth(date);
    this.currentMonth = eachDayOfInterval({ start: startOfCurrentMonth, end: endOfCurrentMonth });
    this.selectedDate.setHours(0, 0, 0, 0).toString()
    setTimeout(() => {
      this.scrollIntoMyView(this.selectedDate);
    }, 500)
  }

  goToPreviousMonth(): void {
    const previousMonthDate = subMonths(this.currentMonth[0], 1);
    this.createDateArray(previousMonthDate);
  }

  goToNextMonth(): void {
    const nextMonthDate = addMonths(this.currentMonth[0], 1);
    this.createDateArray(nextMonthDate);
  }

  isCurrentDate(date: Date): boolean {
    return isSameDay(date, this.selectedDate);
  }

  scrollIntoMyView(date: Date): void {
    const targetId = 'target' + this.currentMonth.findIndex((d: any) => isSameDay(d, date));
    const targetElement = this.el.nativeElement.querySelector(`#${targetId}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
  }

  smoothScroll(direction: 'left' | 'right', distance: number) {
    const container = this.datesContainer.nativeElement;
    const scrollAmount = direction === 'left' ? container.scrollLeft - distance : container.scrollLeft + distance;
    container.scrollTo({ 
      left: scrollAmount,
      behavior: 'smooth'
    });
  }

  onChange(date: any) {
    this.selectedDate = date;
    this.onDateChange.emit(date);
  }
}

