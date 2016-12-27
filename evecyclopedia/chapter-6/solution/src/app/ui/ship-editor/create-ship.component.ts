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
  isEdit: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private shipsService: ShipsService) {
    super(shipsService);
  }

  save() {
    console.log('Saving...', this.ship);
  }

  cancel() {
    this.router.navigate(['']);
  }
}