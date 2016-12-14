import { Injectable } from '@angular/core';

@Injectable()
export class ShipsInjectableService{
    ships:string[] = ['Vengeance', 'Retribution', 'Rifter', 'Bowhead', 'Orca'];
    getShips(){
        return this.ships;
    }
}