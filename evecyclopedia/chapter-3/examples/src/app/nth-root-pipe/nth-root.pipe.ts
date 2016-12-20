import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'nthRoot'})
export class NthRootPipe implements PipeTransform {
  transform(number: number, nthRoot:number) {
    return Math.pow(number, 1 / nthRoot);
  }
}
