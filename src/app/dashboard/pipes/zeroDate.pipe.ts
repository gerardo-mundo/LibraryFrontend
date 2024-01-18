import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ZeroDate',
})
export class ZeroDatePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    if (value === '0001-01-01T00:00:00') {
      return 'S/F';
    }

    const date = new Date(value);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  }
}
