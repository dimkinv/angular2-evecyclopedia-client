import {Injectable} from '@angular/core';
import * as mock from '../../app.data';
import {Ship} from '../models/ship.model';

@Injectable()
export class ShipsService{

    getGroups(){
        return mock.getGroups();
    }
    getRaces(groupName){
        return mock.getRacesForGroupName(groupName);
    }
    getShips(groupName, raceName){
        return mock.getShipsByGroupAndRace(groupName, raceName);
    }

    getShip(groupName, raceName, shipName):Ship{
        return mock.getShipDetailsByGroupRaceAndShipNames(groupName, raceName, shipName);
    }

}