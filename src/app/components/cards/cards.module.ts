import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { GridComponent } from './grid/grid.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  exports: [
    GridComponent
  ]
})
export class CardsModule { }
