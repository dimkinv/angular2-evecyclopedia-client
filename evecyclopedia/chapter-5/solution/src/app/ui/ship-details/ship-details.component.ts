import {Component, Input, OnChanges} from '@angular/core';
import {ShipSelector} from '../../models/ship-selector.model';
import {Ship} from '../../models/ship.model';
import {ShipsService} from '../../services/ships.service';

@Component({
  selector: 'ship-details',
  styleUrls: ['ship-details.component.less'],
  templateUrl: 'ship-details.component.html'
})
export class ShipDetailsComponent implements OnChanges {
  @Input()
  shipSelector: ShipSelector;

  ship:Ship;

  constructor(private shipsService:ShipsService) {}

  ngOnChanges(changeObj){
    if(changeObj.shipSelector.currentValue){
      this.ship = this.shipsService.getShip(this.shipSelector.groupName, this.shipSelector.raceName, this.shipSelector.shipName);
    }
  }

  get encodedShipName(){
    return encodeURI(this.ship.name)
  }
}