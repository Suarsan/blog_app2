import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TileModule } from '../tile/tile.module';
import { MainGridComponent } from '../main-grid/main-grid.component';
import { CardDetailComponent } from '../card-detail/card-detail.component';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [
    HomeComponent,
    MainGridComponent,
    CardDetailComponent
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TileModule,
    PipesModule
  ]
})
export class HomeModule { }
