import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule
  ],
  exports: [
    IndexComponent
  ]
})
export class IndexModule { }
