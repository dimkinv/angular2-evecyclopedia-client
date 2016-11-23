import {Component, OnInit, Input} from '@angular/core';
import {ShipService} from '../../services';

@Component({
  selector: 'ship-details',
  styleUrls: ['ship-details.component.less'],
  templateUrl: 'ship-details.component.html'
})
export class ShipDetailsComponent implements OnInit{
  ship;
  tempShip;
  isEditMode:boolean=false;
  racesList:string[] = ['Amarr', 'Caldari', 'Gallente', 'Jove', 'Minmatar', 'Ore'];
  
  @Input()
  spaceshipId:string;

  constructor(private shipService:ShipService){}

  ngOnInit(){
    this.shipService.getSpaceship('/groups/Battleship/races/Amarr/ships/Bhaalgorn')
      .catch(err => {
        console.log('Oh no! something went wrong...');
        return err;
      })
      .subscribe(ship => {
        this.ship = ship;
      })
    //this.ship = window['httpMock'].getRandomShip();
  }


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