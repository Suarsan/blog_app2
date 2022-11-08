import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TileComponent } from '../tile/tile.component';
import { TileRoutingModule } from './tile-routing.module';

@NgModule({
  declarations: [
    TileComponent
  ],
  imports: [
    CommonModule,
    TileRoutingModule
  ],
  exports: [
    TileComponent
  ]
})
export class TileModule { }
