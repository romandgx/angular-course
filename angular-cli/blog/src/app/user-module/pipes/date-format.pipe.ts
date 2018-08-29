import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(date: moment.Moment, dateFormat: string): string {
    return !date ? '' : (moment().utc(date).format(dateFormat));
  }

}
