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
  private ship;
  private isEditMode:boolean=false;

  save(){
    this.isEditMode = false;
  }
  cancel(){
    this.isEditMode = false;
  }
  edit(){
    this.isEditMode = true;
  }
}
