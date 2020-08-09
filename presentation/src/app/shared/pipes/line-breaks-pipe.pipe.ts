import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lineBreaks'
})
export class LineBreaksPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.trim().replace(/\s\s+/g, ',');
    // return 'test';
  }

}
