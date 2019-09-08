import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeWriter'
})
export class TypeWriterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
