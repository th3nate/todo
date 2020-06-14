import { NgModule } from '@angular/core';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';
import {SharedModule} from '../@shared/shared.module';


@NgModule({
  declarations: [BoardComponent],
  imports: [
    SharedModule,
    BoardRoutingModule
  ]
})
export class BoardModule { }
