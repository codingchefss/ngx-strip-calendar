import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { startOfMonth, endOfMonth, eachDayOfInterval, subMonths, addMonths, isSameDay } from 'date-fns';


@Component({
  selector: 'ngx-strip-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './strip-calendar.html',
  styleUrls: ['./strip.calendar.scss']
})
export class StripCalendarComponent implements OnInit {
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
      this.scrollIntoView(this.selectedDate);
    }, 250)
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

  scrollIntoView(date: Date): void {
    const targetId = 'target' + this.currentMonth.findIndex((d: any) => isSameDay(d, date));
    const targetElement = this.el.nativeElement.querySelector(`#${targetId}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
  }

  onChange(date: any) {
    this.selectedDate = date;
    this.onDateChange.emit(date);
  }
}

