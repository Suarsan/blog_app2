import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { PageCityComponent } from '../page-city/page-city.component';
import { IndexModule } from '../../index/index.module';
import { PageCompanionshipComponent } from '../page-companionship/page-companionship.component';
import { PipesModule } from '../../../pipes/pipes.module';
import { PageCategoryComponent } from '../page-category/page-category.component';
import { CardsModule } from '../../cards/cards.module';
import { PageTransportComponent } from '../page-transport/page-transport.component';
import { PageSeasonComponent } from '../page-season/page-season.component';
import { PageDaysComponent } from '../page-days/page-days.component';

@NgModule({
  declarations: [
    PageComponent,
    PageCityComponent,
    PageCompanionshipComponent,
    PageTransportComponent,
    PageSeasonComponent,
    PageDaysComponent,
    PageCategoryComponent
  ],
  imports: [
    CommonModule,
    IndexModule,
    PipesModule,
    CardsModule
  ],
  exports: [
    PageComponent,
    PageCityComponent,
    PageCompanionshipComponent,
    PageTransportComponent,
    PageSeasonComponent,
    PageDaysComponent,
    PageCategoryComponent
  ]
})
export class PageModule { }
