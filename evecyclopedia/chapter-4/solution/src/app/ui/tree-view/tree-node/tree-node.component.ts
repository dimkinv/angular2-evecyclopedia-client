import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'tree-node',
  styleUrls: ['tree-node.component.less'],
  templateUrl: 'tree-node.component.html'
})
export class TreeNodeComponent {
  @Output()
  onNodeClick = new EventEmitter();
  @Input()
  title: string;
  constructor() {

  }
}
