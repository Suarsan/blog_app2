import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoyaltyPrivacyComponent } from './loyalty-privacy.component';
import { LoyaltyPrivacyRoutingModule } from './loyalty-privacy-routing.module';

@NgModule({
  declarations: [LoyaltyPrivacyComponent],
  imports: [LoyaltyPrivacyRoutingModule, CommonModule],
  exports: [LoyaltyPrivacyComponent],
})
export class LoyaltyPrivacyModule { }
