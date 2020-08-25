import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {TruncatePipe} from './pipes/truncate.pipe';
import {AuthGuardService} from './guards/auth-guard.service';
import {NavModule} from './nav/nav.module';

@NgModule({
  declarations: [TruncatePipe],
  imports     : [
    CommonModule,
    MaterialModule,
    NavModule,
    ReactiveFormsModule
  ],
  exports     : [
    CommonModule,
    MaterialModule,
    NavModule,
    ReactiveFormsModule,
    TruncatePipe
  ],
  providers   : [AuthGuardService]
})
export class SharedModule {
}
