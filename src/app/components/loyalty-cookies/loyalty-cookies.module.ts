import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoyaltyCookiesComponent } from './loyalty-cookies.component';
import { LoyaltyCookiesRoutingModule } from './loyalty-cookies-routing.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [LoyaltyCookiesComponent],
  imports: [
    LoyaltyCookiesRoutingModule, 
    CommonModule,
    FooterModule
  ],
  exports: [LoyaltyCookiesComponent],
})
export class LoyaltyCookiesModule { }
