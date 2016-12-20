import {Component, Input} from '@angular/core';


@Component({
  selector: 'tree-node',
  styleUrls: ['tree-node.component.less'],
  templateUrl: 'tree-node.component.html'
})
export class TreeNodeComponent {
  @Input()
  title: string;
  @Input()
  isSelected: boolean;

  constructor() {

  }
}
