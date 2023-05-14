import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoyaltyCookiesComponent } from './loyalty-cookies.component';
import { LoyaltyCookiesRoutingModule } from './loyalty-cookies-routing.module';

@NgModule({
  declarations: [LoyaltyCookiesComponent],
  imports: [LoyaltyCookiesRoutingModule, CommonModule],
  exports: [LoyaltyCookiesComponent],
})
export class LoyaltyCookiesModule { }
