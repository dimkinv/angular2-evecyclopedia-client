import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-zippy',
  templateUrl: './sub-zippy.component.html',
  styleUrls: ['./sub-zippy.component.less']
})
export class SubZippyComponent {
  title:string = `I'm a Sub-Zippy Component!`;
  constructor() { }
}
