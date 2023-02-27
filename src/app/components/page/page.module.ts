import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { PageCityComponent } from '../page-city/page-city.component';
import { IndexModule } from '../index/index.module';
import { PageCompanionshipComponent } from '../page-companionship/page-companionship.component';
import { PageSeasonComponent } from '../page-season/page-season.component';
import { PageTransportComponent } from '../page-transport/page-transport.component';
import { PageDaysComponent } from '../page-days/page-days.component';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    PageComponent,
    PageCityComponent,
    PageCompanionshipComponent,
    PageTransportComponent,
    PageSeasonComponent,
    PageDaysComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    IndexModule,
    PipesModule
  ]
})
export class PageModule { }
