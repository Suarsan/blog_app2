import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { CardsModule } from '../cards/cards.module';
import { HomeRoutingModule } from './home-routing.module';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PipesModule,
    CardsModule
  ],
  exports: [HomeComponent, NavComponent]
})
export class HomeModule { }
