import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BoardComponent} from './board.component';
import {AuthGuardService} from '../@shared/guards/auth-guard.service';

const routes: Routes = [
    {
        path       : 'board',
        component  : BoardComponent,
        canActivate: [AuthGuardService]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BoardRoutingModule {
}
