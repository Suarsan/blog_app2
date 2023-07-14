import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalComponent } from './legal.component';
import { LegalRoutingModule } from './legal-routing.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [LegalComponent],
  imports: [
    LegalRoutingModule, 
    FooterModule,
    CommonModule
  ],
  exports: [LegalComponent]
})
export class LegalModule { }
