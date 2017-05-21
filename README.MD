# ng2-analogical-countdown
[![](https://img.shields.io/badge/npm-v4.0.1-brightgreen.svg)](https://www.npmjs.com/package/ng2-analogical-countdown)

## Installation

To install this library, run:

```bash
$ npm install ng2-analogical-countdown --save
```

## Usage

In order to use animation, please include Animation Module from `angular v4.x` to your project:

```
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
