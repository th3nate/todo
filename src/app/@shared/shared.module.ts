import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {TruncatePipe} from './pipes/truncate.pipe';

@NgModule({
    declarations: [TruncatePipe],
    imports     : [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    exports     : [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        TruncatePipe
    ]
})
export class SharedModule {
}
