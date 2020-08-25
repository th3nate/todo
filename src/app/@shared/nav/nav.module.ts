import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav.component';
import {MaterialModule} from '../material.module';


@NgModule({
  declarations: [NavComponent],
  imports     : [
    MaterialModule,
    CommonModule
  ],
  exports     : [NavComponent]
})
export class NavModule {
}
