import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoyaltyPrivacyComponent } from './loyalty-privacy.component';
import { LoyaltyPrivacyRoutingModule } from './loyalty-privacy-routing.module';
import { FooterModule } from '../footer/footer.module';
import { NavModule } from '../nav/nav.module';

@NgModule({
  declarations: [LoyaltyPrivacyComponent],
  imports: [
    LoyaltyPrivacyRoutingModule, 
    CommonModule,
    NavModule,
    FooterModule
  ],
  exports: [LoyaltyPrivacyComponent],
})
export class LoyaltyPrivacyModule { }
