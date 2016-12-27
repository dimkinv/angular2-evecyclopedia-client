import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'details-view',
  templateUrl: './details-view.html'
})
export class DetailsViewComponent{
  private rand: number;
  constructor(private activatedState:ActivatedRoute){
    this.rand = this.activatedState.params.getValue('rand').rand;
  }
}
