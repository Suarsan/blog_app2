import { NgModule } from '@angular/core';
import { DateTransformPipe } from './date-transform.pipe';
import { EncodeuriPipe } from './encodeuri.pipe';

@NgModule({
  declarations: [
    EncodeuriPipe,
    DateTransformPipe
  ],
  imports: [],
  exports: [
    EncodeuriPipe,
    DateTransformPipe
  ]
})
export class PipesModule { }
