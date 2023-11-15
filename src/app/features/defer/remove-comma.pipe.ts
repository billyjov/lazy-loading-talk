import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeComma',
  standalone: true,
})
export class RemoveCommaPipe implements PipeTransform {
  transform(value: string): unknown {
    if (!!value) {
      return value.replace(/,/g, '.');
    } else {
      return '';
    }
  }
}
