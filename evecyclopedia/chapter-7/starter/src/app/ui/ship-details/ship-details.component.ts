import {Ship} from '../../models/ship.model';
import {Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ship-details',
  styleUrls: ['ship-details.component.less'],
  templateUrl: 'ship-details.component.html'
})
export class ShipDetailsComponent {
  @Input()
  ship: Ship;
  
  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  constructor(private router:Router) {}

  get encodedShipName(){
    return encodeURI(this.ship.name)
  }

  editShip(){
      this.edit.emit();
  }
}