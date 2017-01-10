import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {ShipSelector} from '../../models/ship-selector.model';
import {Ship} from '../../models/ship.model';
import {ShipsService} from '../../services/ships.service';

@Component({
  selector: 'ship-details',
  styleUrls: ['ship-details.component.less'],
  templateUrl: 'ship-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShipDetailsComponent {
  @Input()  
  ship:Ship;

  constructor() {}

  get encodedShipName(){
    return encodeURI(this.ship.name)
  }
}