import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound.component';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [NotfoundComponent],
  imports: [
    CommonModule,
    FooterModule
  ],
  exports: [NotfoundComponent]
})
export class NotfoundModule { }
