import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index-routing.module';
import { EncodeuriModule } from '../../pipes/encodeuri.module';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    EncodeuriModule
  ],
  exports: [
    IndexComponent
  ]
})
export class IndexModule { }
