import { Component } from '@angular/core';
import { ShipSelector } from './models/ship-selector.model';
import { Ship } from './models/ship.model';
import { ShipsService } from './services/ships.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  ship:Ship;

  constructor(private shipService:ShipsService){}

  onShipSelected(shipSelector:ShipSelector){
    this.shipService.getShip(shipSelector.groupName, shipSelector.raceName, shipSelector.shipName)
                    .subscribe(ship => {
                        this.ship = ship
                    });
  }
}
