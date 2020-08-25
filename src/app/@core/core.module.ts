import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthService} from './services/auth.service';

@NgModule({
  imports  : [
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports  : [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService]
})
export class CoreModule {
}
