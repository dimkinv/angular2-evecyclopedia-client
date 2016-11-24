import {Component, OnInit , Output, EventEmitter} from '@angular/core';
import {ShipService} from '../../services';

@Component({
  selector: 'left-menu',
  styleUrls: ['left-menu.component.less'],
  templateUrl: 'left-menu.component.html'
})
export class LeftMenuComponent implements OnInit{
  title = 'EVE Cyclopedia';
  groups:{name:string}[];
  races:{name:string}[];
  ships:{name:string}[];
  selectedGroup: string;
  selectedRace: string;
  selectedShip: string;

  @Output() shipChange:EventEmitter<any> = new EventEmitter();

  constructor(private shipService:ShipService){}

  ngOnInit(){
    this._resetSelected();
    this.shipService.getGroups().subscribe(groups => {
      this.groups = groups
    })
  }

  fetchRaces(groupName){
    this.races = [];
    this.ships = [];
    this.selectedRace = null;
    this.selectedShip = null;

    this.shipService.getGroupRaces(groupName).subscribe(races => {
      this.selectedGroup = groupName;
      this.races = races;
    })
  }
  fetchShips(groupName,raceName){
    this.ships = [];
    this.selectedShip = null;

    this.shipService.getShipsByGroupAndRace(groupName, raceName).subscribe(ships => {
      this.selectedRace=raceName;
      this.ships = ships;
    })
  }
  selectShip(groupName, raceName, shipName){
    this.selectedShip = shipName;
    this.shipChange.emit('loading');
    this.shipService.getShipDetails(groupName, raceName, shipName).subscribe(shipData => {
      this.shipChange.emit(shipData);
    })
  };
  _resetSelected(){
    this.selectedGroup = null;
    this.selectedRace = null;
    this.selectedShip = null;
  }
}
