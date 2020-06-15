import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthGuardService} from '../@shared/guards/auth-guard.service';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule
    ],
    exports: [
        BrowserModule,
        BrowserAnimationsModule
    ],
    providers: [AuthGuardService]
})
export class CoreModule {
}
