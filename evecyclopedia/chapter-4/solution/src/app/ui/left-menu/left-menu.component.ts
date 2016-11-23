import {Component, OnInit } from '@angular/core';
import {ShipService} from '../../services';

@Component({
  selector: 'left-menu',
  styleUrls: ['left-menu.component.less'],
  templateUrl: 'left-menu.component.html'
})
export class LeftMenuComponent implements OnInit{
  title = 'EVE Cyclopedia';
  groups:{name:string}[];
  races = {};
  selectedGroup: string;

  constructor(private shipService:ShipService){}
  ngOnInit(){
    this.shipService.getGroups().subscribe(groups => {
      this.groups = groups
    })
  }
  fetchRaces(groupName){
    if(this.selectedGroup === groupName){
      this.selectedGroup = null;
      return;
    }
    this.shipService.getGroupRaces(groupName).subscribe(races => {
      this.races[groupName] = races;
      this.selectedGroup = groupName;
    })
  }
}
