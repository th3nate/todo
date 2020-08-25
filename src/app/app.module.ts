import {NgModule} from '@angular/core';
import 'hammerjs'; // needed for a bug in angular material (for slider animation)

import {CoreModule} from './@core/core.module';
import {SharedModule} from './@shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginModule} from './login/login.module';
import {BoardModule} from './board/board.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports     : [
    CoreModule,
    SharedModule,
    LoginModule,
    BoardModule,
    AppRoutingModule,
  ],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
