import {Component} from '@angular/core';
import * as mock from '../../../app.data';


@Component({
  selector: 'tree-view',
  styleUrls: ['tree-view.component.less'],
  templateUrl: 'tree-view.component.html',
})
export class TreeViewComponent {
  groups: {name: string}[];

  constructor() {
    this.groups = mock.getGroups();
  }
}
