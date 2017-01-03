import { Component } from '@angular/core';
import {ZippyService} from '../services/zippy.service'

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.less']
})
export class ZippyComponent {
  doNotShow:boolean = true;

  text:string;
  constructor(private zippyService:ZippyService) { 
    this.text = this.zippyService.getText();
  }

  toggleDisplay() {
    this.doNotShow = !this.doNotShow;
  }

}
