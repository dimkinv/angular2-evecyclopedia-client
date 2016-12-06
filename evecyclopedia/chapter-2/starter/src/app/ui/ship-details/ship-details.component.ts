import {Component} from '@angular/core';

@Component({
  selector: 'ship-details',
  styleUrls: ['ship-details.component.less'],
  templateUrl: 'ship-details.component.html'
})
export class ShipDetailsComponent{
  constructor(){
    this.ship = window['httpMock'].getRandomShip();
    console.log(this.ship);
  }
  private ship;
}
