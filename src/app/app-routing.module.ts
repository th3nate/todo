import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OktaCallbackComponent,} from '@okta/okta-angular';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'login'},
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
