import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { PageCityComponent } from '../page-city/page-city.component';
import { PageCompanionshipComponent } from '../page-companionship/page-companionship.component';
import { PipesModule } from '../../../pipes/pipes.module';
import { PageCategoryComponent } from '../page-category/page-category.component';
import { CardsModule } from '../../cards/cards.module';
import { PageTransportComponent } from '../page-transport/page-transport.component';
import { PageSeasonComponent } from '../page-season/page-season.component';
import { PageDaysComponent } from '../page-days/page-days.component';
import { NavModule } from '../../nav/nav.module';
import { ParagraphsComponent } from '../paragraphs/paragraphs.component';
import { FooterModule } from '../../footer/footer.module';
import { RrssComponent } from '../rrss/rrss.component';

@NgModule({
  declarations: [
    PageComponent,
    PageCityComponent,
    PageCompanionshipComponent,
    PageTransportComponent,
    PageSeasonComponent,
    PageDaysComponent,
    PageCategoryComponent,
    ParagraphsComponent,
    RrssComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    CardsModule,
    NavModule,
    FooterModule
  ],
  exports: []
})
export class PageModule { }
