import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'desarrolladorMayuscula',
  standalone: true
})
export class DesarrolladorMayusculaPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
