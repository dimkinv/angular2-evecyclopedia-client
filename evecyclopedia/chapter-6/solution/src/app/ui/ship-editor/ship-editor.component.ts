import {ShipsService} from '../../services/ships.service';
import {Ship} from '../../models/ship.model';
import {Observable} from 'rxjs';

export class ShipEditorBase{
    ship:Ship;
    groups$:Observable<{name:string}[]>;
    races$:Observable<{name:string}[]>;

    constructor(shipsService:ShipsService){
        this.ship = new Ship();
        this.groups$ = shipsService.getGroups();
        this.races$ = shipsService.getRaces('Battleship');//TODO: workaround - need to expose available races API

    }
}