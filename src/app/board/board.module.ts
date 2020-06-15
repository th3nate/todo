import {NgModule} from '@angular/core';

import {BoardRoutingModule} from './board-routing.module';
import {BoardComponent} from './board.component';
import {SharedModule} from '../@shared/shared.module';
import {TodoDataService} from '../todo/todo.service';
import {DialogComponent} from '../todo/dialog/dialog.component';

@NgModule({
    declarations   : [BoardComponent, DialogComponent],
    imports        : [
        SharedModule,
        BoardRoutingModule
    ],
    providers      : [TodoDataService],
    entryComponents: [DialogComponent]
})
export class BoardModule {
}
