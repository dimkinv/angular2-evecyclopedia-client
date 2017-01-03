import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {ShipSelector} from '../../models/ship-selector.model';
import {ShipsService} from '../../services/ships.service';
import {Observable} from 'rxjs';
import {Group} from '../../models/group.model';
import {Race} from '../../models/race.model';
import {Ship} from '../../models/ship.model';

@Component({
  selector: 'tree-view',
  styleUrls: ['tree-view.component.less'],
  templateUrl: 'tree-view.component.html',
})
export class TreeViewComponent implements OnInit {
  @Output() change:EventEmitter<any> =  new EventEmitter();

  groups: Group[];
  groupRaces: Race[];
  groupRaceShips: {name:string}[];
  selectedGroup: string;
  selectedRace: string;
  selectedShip: string;

  constructor(private shipsService:ShipsService) {}

  ngOnInit(){
    this.shipsService.getGroups().subscribe(groupsData =>{
      this.groups = groupsData;
    });
  }

  getRaces(groupName){
    if(groupName === this.selectedGroup){
      return
    }
    this.shipsService.getRaces(groupName).subscribe(racesData => {
      this.groupRaces = racesData;
    });
    this.selectedGroup = groupName;
    this.selectedRace = null;
    this.selectedShip = null;
  }

  getShips(groupName, raceName){
    if(raceName === this.selectedRace){
      return
    }
    this.shipsService.getShips(groupName, raceName).subscribe(shipsData => {
        this.groupRaceShips = shipsData;
    }) 
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
