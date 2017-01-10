import { Component } from '@angular/core';
import { ShipSelector } from './models/ship-selector.model';
import { ShipsService } from './services/ships.service';
import { Ship } from './models/ship.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  private ship: Ship;
  constructor(private shipsService: ShipsService) { }

  onShipSelected(shipSelector: ShipSelector) {
    this.ship = this.shipsService.getShip(shipSelector.groupName, shipSelector.raceName, shipSelector.shipName);
  }
}
