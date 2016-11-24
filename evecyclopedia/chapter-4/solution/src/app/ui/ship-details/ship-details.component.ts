import {Component, OnInit, Input} from '@angular/core';
import {ShipService} from '../../services';

@Component({
  selector: 'ship-details',
  styleUrls: ['ship-details.component.less'],
  templateUrl: 'ship-details.component.html'
})
export class ShipDetailsComponent{
  tempShip;
  isEditMode:boolean=false;
  racesList:string[] = ['Amarr', 'Caldari', 'Gallente', 'Jove', 'Minmatar', 'Ore'];

  @Input('shipData')
  ship:any;

  constructor(private shipService:ShipService){}

  save(){
    console.log('saving... ', this.ship);
    this.isEditMode = false;
  }
  cancel(){
    this.ship = Object.assign({}, this.tempShip);
    this.isEditMode = false;
  }
  edit(){
    this.tempShip = Object.assign({}, this.ship);
    this.isEditMode = true;
  }
}
