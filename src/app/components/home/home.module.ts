import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TileModule } from '../tile/tile.module';
import { MainGridComponent } from '../main-grid/main-grid.component';

@NgModule({
  declarations: [
    HomeComponent,
    MainGridComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TileModule
  ]
})
export class HomeModule { }
