import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { CardsModule } from '../cards/cards.module';
import { HomeRoutingModule } from './home-routing.module';
import { PlannerComponent } from './planner/planner.component';
import { NavModule } from '../nav/nav.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [
    HomeComponent,
    PlannerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PipesModule,
    CardsModule,
    NavModule,
    FooterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
