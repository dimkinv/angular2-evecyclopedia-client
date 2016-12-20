import {Component, Output, EventEmitter} from '@angular/core';
import {ShipSelector} from '../../models/ship-selector.model';
import {ShipsService} from '../../services/ships.service';


@Component({
  selector: 'tree-view',
  styleUrls: ['tree-view.component.less'],
  templateUrl: 'tree-view.component.html',
})
export class TreeViewComponent {
  @Output() change:EventEmitter<ShipSelector> =  new EventEmitter();

  groups: {name: string}[];
  groupRaces: {name: string}[];
  groupRaceShips: {name:string}[];
  selectedGroup: string;
  selectedRace: string;
  selectedShip: string;

  constructor(private shipsService:ShipsService) {
    this.groups = this.shipsService.getGroups();
  }

  getRaces(groupName){
    if(groupName === this.selectedGroup){
      return
    }
    this.groupRaces = this.shipsService.getRaces(groupName);
    this.selectedGroup = groupName;
    this.selectedRace = null;
    this.selectedShip = null;
  }

  getShips(groupName, raceName){
    if(raceName === this.selectedRace){
      return
    }
    this.groupRaceShips = this.shipsService.getShips(groupName, raceName) 
    this.selectedRace = raceName;
    this.selectedShip = null;
  }

  selectShip(groupName, raceName, shipName){
    if(shipName === this.selectedShip){
      return
    }
    this.selectedShip = shipName;
    this.change.emit({groupName, raceName, shipName});
  }
}
