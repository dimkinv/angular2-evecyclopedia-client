import {Component} from '@angular/core';
import * as mock from '../../../app.data';
import {Ship} from '../../models/ship.model';

@Component({
  selector: 'ship-details',
  styleUrls: ['ship-details.component.less'],
  templateUrl: 'ship-details.component.html'
})
export class ShipDetailsComponent {
  ship: Ship;

  constructor() {
    this.ship = mock.getRandomShip();
  }
}
