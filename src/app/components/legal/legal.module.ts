import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalComponent } from './legal.component';
import { LegalRoutingModule } from './legal-routing.module';

@NgModule({
  declarations: [LegalComponent],
  imports: [LegalRoutingModule, CommonModule],
  exports: [LegalComponent]
})
export class LegalModule { }
