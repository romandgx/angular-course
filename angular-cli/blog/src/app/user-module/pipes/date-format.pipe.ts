import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(date: string | moment.Moment, dateFormat: string): string {
    return !date ? '' : (moment().utc().format(dateFormat));
  }

}
