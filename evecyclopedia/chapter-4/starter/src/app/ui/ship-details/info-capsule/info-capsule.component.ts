import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {Attribute} from '../../../models/attribute.model';

@Component({
  selector: 'info-capsule',
  styleUrls: ['info-capsule.component.less'],
  templateUrl: 'info-capsule.component.html'
})
export class InfoCapsuleComponent implements OnInit {
  @Input()
  attribute: Attribute;
  @Output()
  valueChange: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }
}
