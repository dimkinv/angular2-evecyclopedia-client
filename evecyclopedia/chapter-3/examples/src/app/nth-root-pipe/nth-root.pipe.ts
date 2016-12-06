import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'nthRoot'})
export class NthRootPipe implements PipeTransform {
  transform(number: number, nthRoot) {
    return Math.pow(number, 1 / nthRoot);
  }
}
