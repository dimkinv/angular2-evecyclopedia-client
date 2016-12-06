import {Component} from '@angular/core';

@Component({
  selector: 'ship-details',
  styleUrls: ['ship-details.component.less'],
  templateUrl: 'ship-details.component.html'
})
export class ShipDetailsComponent{
  constructor(){
    this.ship = window['httpMock'].getRandomShip();
  }
  ship;
  tempShip;
  isEditMode:boolean=false;
  racesList:string[] = ['Amarr', 'Caldari', 'Gallente', 'Jove', 'Minmatar', 'Ore'];

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