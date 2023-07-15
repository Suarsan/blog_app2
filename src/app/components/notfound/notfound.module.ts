import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound.component';
import { FooterModule } from '../footer/footer.module';
import { NavModule } from '../nav/nav.module';

@NgModule({
  declarations: [NotfoundComponent],
  imports: [
    CommonModule,
    FooterModule,
    NavModule
  ],
  exports: [NotfoundComponent]
})
export class NotfoundModule { }
