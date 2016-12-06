import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'squareRoot'})
export class SquareRootPipe implements PipeTransform {
  transform(number: number) {
    return Math.sqrt(number);
  }
}
