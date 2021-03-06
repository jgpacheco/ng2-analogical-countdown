# ng2-analogical-countdown
[![NPM version][npm-version-image]][npm-url]
[![MIT License][license-image]][license-url]
[![Build Status][travis-image]][travis-url]

[![NPM][npm-stats-image]][npm-url]

## Installation

To install this library, run:

```bash
$ npm install ng2-analogical-countdown --save
```

## Usage

In order to use animation, please include Animation Module from `angular v4.x` to your project:

```typescript
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    import { CountDownModule } from 'ng2-analogical-countdown';

    @NgModule({
        imports: [ BrowserModule, BrowserAnimationsModule, CountDownModule ],
        ...
    })
    export class AppModule {}
```

Now you can use analogical-countdown directive in your Angular application:

```
    <analogical-countdown [time]="18000" (beep)="beep()"></analogical-countdown>
```

[Demo](https://jgpacheco.github.io/ng2-analogical-countdown/example/)

## License

MIT © [Jaime](mailto:jaime.glez.pacheco@gmail.com)

[npm-url]: https://www.npmjs.com/package/ng2-analogical-countdown
[npm-version-image]: https://img.shields.io/npm/v/npm.svg?style=flat

[license-image]: https://img.shields.io/npm/l/express.svg?style=flat
[license-url]: LICENSE

[travis-image]: https://travis-ci.org/jgpacheco/ng2-analogical-countdown.svg?branch=master
[travis-url]: https://travis-ci.org/jgpacheco/ng2-analogical-countdown

[npm-stats-image]: https://nodei.co/npm/ng2-analogical-countdown.png?downloads=true&downloadRank=true&stars=true
[travis-url]: https://travis-ci.org/jgpacheco/ng2-analogical-countdown
