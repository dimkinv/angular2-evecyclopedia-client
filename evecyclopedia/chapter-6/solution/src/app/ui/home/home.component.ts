import { Component, OnInit } from '@angular/core';
import {ShipSelector} from '../../models/ship-selector.model';
import {Ship} from '../../models/ship.model';
import {ShipsService} from '../../services/ships.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  shipSelector:ShipSelector;
  selectedShip:Ship;
  constructor(private shipsService:ShipsService, private router:Router) { }

  onShipSelection(shipSelector:ShipSelector){
      this.shipsService.getShip(shipSelector.groupName, shipSelector.raceName, shipSelector.shipName)
                        .subscribe(shipDetails => {
                          this.selectedShip = shipDetails
                        });
  }

  editShip(){
    this.router.navigate(['/group', this.selectedShip.group, 'race', this.selectedShip.race, 'ship', this.selectedShip.name]);
  }
}
