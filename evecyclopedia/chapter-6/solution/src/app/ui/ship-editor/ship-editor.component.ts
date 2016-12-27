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
  ship:Ship = new Ship();

  groups$:Observable<{name:string}[]>;
  races$:Observable<{name:string}[]>;

  constructor(private router: Router, private route: ActivatedRoute, private shipsService:ShipsService) { }

  ngOnInit() {
    this.groups$ = this.shipsService.getGroups();
    this.races$ = this.shipsService.getRaces('Battleship');//TODO: workaround - need to expose available races API

    this.route.params
      .switchMap((params:Params) => {
        this.isEdit = params['groupName'] !== '_new_';
        return (this.isEdit) ? 
                this.shipsService.getShip(params['groupName'], params['raceName'], params['shipName']):
                Observable.of(new Ship());
      })
      .subscribe(shipDetails => {
        this.ship = shipDetails;
      });
  }

  save(){
    console.log(this.ship);
  }

  cancel(){
    this.router.navigate(['']);
  }

}
