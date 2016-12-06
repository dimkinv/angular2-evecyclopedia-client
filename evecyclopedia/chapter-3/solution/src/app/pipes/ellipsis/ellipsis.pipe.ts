import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'ellipsis'})
export class EllipsisPipe implements PipeTransform {
  transform(text: string, numOfLetters: number): string {
    if (!text) {
      return text;
    }

    if (!numOfLetters || text.length <= numOfLetters) {
      return text;
    }

    text = text.substr(0, numOfLetters);

    let lastSpace = text.lastIndexOf(' ');

    if (lastSpace !== -1) {
      text = text.substr(0, lastSpace);
    }

    return text + '...';
  }
}
