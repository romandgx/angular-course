import { Pipe, PipeTransform } from '@angular/core';
import { Moment } from 'moment';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Moment, dateFormat: string): string {
    console.log(value.format(dateFormat))
    //return !value ? '' : (value.format(dateFormat));
    return '';
  }

}
