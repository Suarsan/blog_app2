import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { PagePostComponent } from '../page-post/page-post.component';
import { PageBrandComponent } from '../page-brand/page-brand.component';
import { PageGlosaryComponent } from '../page-glosary/page-glosary.component';
import { PageSponsoredComponent } from '../page-sponsored/page-sponsored.component';
import { PageSomatotypeComponent } from '../page-somatotype/page-somatotype.component';


@NgModule({
  declarations: [
    PageComponent,
    PagePostComponent,
    PageBrandComponent,
    PageGlosaryComponent,
    PageSponsoredComponent,
    PageSomatotypeComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PageModule { }
