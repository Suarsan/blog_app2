import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalComponent } from './legal.component';
import { LegalRoutingModule } from './legal-routing.module';
import { FooterModule } from '../footer/footer.module';
import { NavModule } from '../nav/nav.module';

@NgModule({
  declarations: [LegalComponent],
  imports: [
    LegalRoutingModule, 
    CommonModule,
    NavModule,
    FooterModule
  ],
  exports: [LegalComponent]
})
export class LegalModule { }
