import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OktaCallbackComponent,} from '@okta/okta-angular';
import {AuthGuardService} from './@shared/guards/auth-guard.service';

const routes: Routes = [
    {
        path       : '',
        pathMatch  : 'full',
        redirectTo : '',
        canActivate: [AuthGuardService]
    },
    {
        path     : 'implicit/callback',
        component: OktaCallbackComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
