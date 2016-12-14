import {Component, OnInit } from '@angular/core';
import {ShipsInjectableService} from './ships.service';

@Component({
    selector:'ships-di-component',
    templateUrl: './ships.component.html',
    providers: [ShipsInjectableService] //component scope inject
})
export class ShipsDIComponent implements OnInit{
    ships:string[];

    constructor(private shipsService:ShipsInjectableService){}

    ngOnInit(){
        this.ships = this.shipsService.getShips();
    }
}