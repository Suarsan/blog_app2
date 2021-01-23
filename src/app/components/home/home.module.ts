import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FeaturedReviewsComponent } from '../featured-reviews/featured-reviews.component';

@NgModule({
  declarations: [
    HomeComponent,
    FeaturedReviewsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
