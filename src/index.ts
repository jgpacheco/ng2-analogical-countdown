import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountDownComponent } from './countdown.component';

export * from './countdown.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CountDownComponent,
    ],
    exports: [
        CountDownComponent,
    ]
})
export class CountDownModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CountDownModule,
        };
    }
}
