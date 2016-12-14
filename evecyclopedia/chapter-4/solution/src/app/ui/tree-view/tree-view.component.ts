import {Component} from '@angular/core';
import * as mock from '../../../app.data';


@Component({
  selector: 'tree-view',
  styleUrls: ['tree-view.component.less'],
  templateUrl: 'tree-view.component.html',
})
export class TreeViewComponent {
  groups: {name: string}[];
  groupRaces: {name: string}[];
  groupRaceShips: {name:string}[];
  selectedGroup: string;
  selectedRace: string;
  selectedShip: string;

  constructor() {
    this.groups = mock.getGroups();
  }

  getRaces(groupName){
    if(groupName === this.selectedGroup){
      return
    }
    this.groupRaces = mock.getRacesForGroupName(groupName);
    this.selectedGroup = groupName;
    this.selectedRace = null;
    this.selectedShip = null;
  }

  getShips(groupName, raceName){
    if(raceName === this.selectedRace){
      return
    }
    this.groupRaceShips = mock.getShipsByGroupAndRace(groupName, raceName) 
    this.selectedRace = raceName;
    this.selectedShip = null;
  }

  selectShip(shipName){
    if(shipName === this.selectedShip){
      return
    }
    this.selectedShip = shipName;
    console.log('SHIP selected: ', shipName);
  }
}
