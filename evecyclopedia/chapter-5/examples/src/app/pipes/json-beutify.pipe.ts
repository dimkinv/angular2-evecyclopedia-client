import {Pipe} from '@angular/core';

@Pipe({
  name: 'jsonBeautify'
})
export class JsonBeautify {
  transform(val) {
      if(!val){
          return val
      }
    return JSON.stringify(val, null, 2)
      .replace(/ /g, '&nbsp;')
      .replace(/\n/g, '<br/>');
  }
}