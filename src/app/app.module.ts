import {NgModule} from '@angular/core';
import 'hammerjs'; // needed for a bug in angular material (for slider animation)

import {CoreModule} from './@core/core.module';
import {SharedModule} from './@shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginModule} from './login/login.module';
import {BoardModule} from './board/board.module';
import {OKTA_CONFIG, OktaAuthModule} from '@okta/okta-angular';
import config from './auth/okta.config';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        CoreModule,
        SharedModule,
        OktaAuthModule,
        LoginModule,
        BoardModule,
        AppRoutingModule,
    ],
    providers   : [
        {provide: OKTA_CONFIG, useValue: config.oidc},
    ],
    bootstrap   : [AppComponent]
})
export class AppModule {
}
