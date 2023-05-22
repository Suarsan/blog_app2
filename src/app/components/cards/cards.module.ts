import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { GridComponent } from './grid/grid.component';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    GridComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  exports: [
    GridComponent,
    IndexComponent
  ]
})
export class CardsModule { }
