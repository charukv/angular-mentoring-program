import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let transformedValue;

    if (value > 60) {
      transformedValue = `${Math.trunc(value / 60)}h ${value % 60} min`
    } else {
      transformedValue = `${value} min`
    }

    return transformedValue;
  }

}
