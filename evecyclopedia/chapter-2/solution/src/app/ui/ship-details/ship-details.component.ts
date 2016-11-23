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
  private editMode:boolean=false;
  edit(){
    this.editMode = true;
  }
  save(){
    this.editMode = false;
  }
  cancel(){
    this.editMode = false;
  }
}
