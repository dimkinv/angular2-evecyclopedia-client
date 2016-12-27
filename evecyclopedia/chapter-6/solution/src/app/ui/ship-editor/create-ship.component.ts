import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ShipsService } from '../../services/ships.service';
import { Ship } from '../../models/ship.model';
import { Observable } from 'rxjs';
import { ShipEditorBase } from './ship-editor.component';

@Component({
  selector: 'create-ship',
  templateUrl: './ship-editor.component.html',
  styleUrls: ['./ship-editor.component.less']
})
export class CreateShipComponent extends ShipEditorBase {
  title: string = 'Create Ship';

  constructor(private router: Router, private route: ActivatedRoute, private shipsService: ShipsService) {
    super(shipsService);
  }

  save() {
    this.shipsService.createShip(this.ship)
                     .subscribe(()=>{
                       console.log('Ship created successfully!!');
                       this.router.navigate(['']);
                     })
  }

  cancel() {
    this.router.navigate(['']);
  }
}