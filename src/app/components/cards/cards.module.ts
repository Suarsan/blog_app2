import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { GridComponent } from './grid/grid.component';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    GridComponent,
    IndexComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  exports: [
    GridComponent,
    IndexComponent,
    ListComponent
  ]
})
export class CardsModule { }
