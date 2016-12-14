import {Injectable} from '@angular/core';

@Injectable()
export class ShipsService{
    ships:string[] = ['Vengeance', 'Retribution', 'Rifter', 'Bowhead', 'Orca'];
    getShips(){
        return this.ships;
    }
}