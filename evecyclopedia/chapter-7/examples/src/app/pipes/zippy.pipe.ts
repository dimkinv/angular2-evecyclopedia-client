import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zippy'
})
export class ZippyPipe implements PipeTransform {

  transform(value: string): string {
    let zippidy = value.replace(/\w+/g, 'zippy');
    return zippidy;
  }
}
