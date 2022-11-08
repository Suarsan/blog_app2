import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encodeuri'
})
export class EncodeuriPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value) {
      return encodeURI(value);
    }
    return null;
  }

}
