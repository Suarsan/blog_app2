import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoyaltyPrivacyComponent } from './loyalty-privacy.component';
import { LoyaltyPrivacyRoutingModule } from './loyalty-privacy-routing.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [LoyaltyPrivacyComponent],
  imports: [
    LoyaltyPrivacyRoutingModule, 
    CommonModule,
    FooterModule
  ],
  exports: [LoyaltyPrivacyComponent],
})
export class LoyaltyPrivacyModule { }
