import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'reminder'})
export class ReminderPipe implements PipeTransform {
  transform(numbers: number[], reminder: number) {
    if(!reminder){
      return numbers;
    }

    let collection: number[] = [];
    numbers.forEach((number: number) => {
      if (number % reminder === 0) {
        collection.push(number);
      }
    });

    return collection;
  }
}
