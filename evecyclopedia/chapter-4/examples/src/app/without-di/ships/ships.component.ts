import {Component, OnInit } from '@angular/core';
import {ShipsService, IShipsService} from './ships.service';

@Component({
    selector:'ships-component',
    templateUrl: './ships.component.html'
})
export class ShipsComponent implements OnInit{
    shipsService:IShipsService;
    ships:string[];
    
    ngOnInit(){
        this.shipsService = new ShipsService();
        this.ships = this.shipsService.getShips();
    }
    
}