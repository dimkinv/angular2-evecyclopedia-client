import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ShipsService} from '../../services/ships.service';
import {Ship} from '../../models/ship.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-ship-editor',
  templateUrl: './ship-editor.component.html',
  styleUrls: ['./ship-editor.component.less']
})
export class ShipEditorComponent implements OnInit {
  isEdit:any;
  ship:Ship;

  groups$:Observable<{name:string}[]>;
  races$:Observable<{name:string}[]>;

  constructor(private router: Router, private route: ActivatedRoute, private shipsService:ShipsService) { }

  ngOnInit() {
    this.groups$ = this.shipsService.getGroups();
    this.races$ = this.shipsService.getRaces('Battleship');//TODO: workaround - need to expose available races API
    //TODO: 1st time fetch doesnt set group + race on mac

    this.route.url.subscribe(url =>{
      this.isEdit = url[0].path !== 'new-ship';
      if(this.isEdit){
        this.fetchShipDetails();
      }else{
        this.fetchEmptyShipModel();
      }
    });
    

  }

  fetchShipDetails(){
    this.route.params
      .switchMap((params:Params) => {
        return this.shipsService.getShip(params['groupName'], params['raceName'], params['shipName'])
      })
      .subscribe(shipDetails => {
        this.ship = shipDetails;
      });
  }

  fetchEmptyShipModel(){
    this.ship = new Ship();
  }

  save(){
    console.log(this.ship);
  }

  cancel(){
    this.router.navigate(['']);
  }

}
