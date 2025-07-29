<h1 align="center">ngx-strip-calendar</h1>
<p>
  <img src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/codingchefss/ngx-strip-calendar#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/codingchefss/ngx-strip-calendar/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/codingchefss/ngx-strip-calendar/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

## 📝 Table of Contents

- [Prerequisites](#prerequisites)
- [Install](#install)
- [Setup](#setup)
- [Usage](#usage)
- [Author](#author)
- [Contributing](#contributing)
- [Show your support](#support)
- [License](#license)

## ✅ Prerequisites <a name = "prerequisites"></a>

The current version of the library is compatible with Angular 20+ and Ionic 8+.

## ⬇️ Install <a name = "install"></a>

Using npm

```sh
npm install ngx-strip-calendar --save
```

Using yarn

```sh
yarn add ngx-strip-calendar
```

## 🛠 Setup <a name = "setup"></a>

Once installed you need to import it directly in component, you will be using it in:

```js
import { StripCalendarComponent } from 'ngx-strip-calendar';

@Component({
  ...
  imports: [StripCalendarComponent, ...],
  ...
})
```

## Usage <a name = "usage"></a>

Include the component on page template, like the example below:

```
  <ngx-strip-calendar
  (onDateChange)="yourFunction($event)"></ngx-strip-calendar>
```

### Events

- onDateChange: `EventEmitter<string>, called whenever you change a date value`

## Author <a name = "author"></a>

👤 **CodingChefs**

- Github: [@codingchefss](https://github.com/codingchefss)

## 🤝 Contributing <a name = "contributing"></a>

Contributions, issues and feature requests are welcome!<br />
Feel free to check [issues page](https://github.com/codingchefss/ngx-strip-calendar/issues).

## Show your support <a name = "support"></a>

Give a ⭐️ if this project helped you!

## 📝 License <a name = "license"></a>

Copyright © 2025 [CodingChefs](https://codingchefs.com/).<br />
This project is [MIT](https://github.com/codingchefss/ngx-strip-calendar/blob/master/LICENSE) licensed.
