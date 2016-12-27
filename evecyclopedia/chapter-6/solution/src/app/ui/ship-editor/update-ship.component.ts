import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ShipsService} from '../../services/ships.service';
import {Ship} from '../../models/ship.model';
import {Observable} from 'rxjs';
import {ShipEditorBase} from './ship-editor.component';

@Component({
  selector: 'update-ship',
  templateUrl: './ship-editor.component.html',
  styleUrls: ['./ship-editor.component.less']
})
export class UpdateShipComponent extends ShipEditorBase implements OnInit {
  isEdit:boolean = true;

  constructor(private router: Router, private route: ActivatedRoute, private shipsService:ShipsService) {
    super(shipsService);
   }

  ngOnInit() {
    this.route.params
      .switchMap((params:Params) => {
        return this.shipsService.getShip(params['groupName'], params['raceName'], params['shipName'])
      })
      .subscribe(shipDetails => {
        this.ship = shipDetails;
      });
  }

  save(){
    console.log('Updating...', this.ship);
  }

  cancel(){
    this.router.navigate(['']);
  }

}
