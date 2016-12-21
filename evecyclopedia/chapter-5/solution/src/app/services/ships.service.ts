import {Injectable} from '@angular/core';
import * as mock from '../../app.data';
import {Ship} from '../models/ship.model';
import {Group} from '../models/group.model';
import {Race} from '../models/race.model';

import { Observable }     from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import '../../rxjs-addons';


@Injectable()
export class ShipsService{
    baseUrl:string = 'https://evecyclopedia.herokuapp.com/api';

    constructor(private http:Http){}

    getGroups():Observable<Group[]>{
        //return mock.getGroups();
        return this.http.get(this.baseUrl + '/groups')
                        .map(this.checkForErrors)
                        .catch(err => Observable.throw(err))
                        .map(this.getJson)
    }

    getRaces(groupName):Observable<Race[]>{
        //return mock.getRacesForGroupName(groupName);
        return this.http.get(`${this.baseUrl}/groups/${groupName}/races`)
                        .map(this.checkForErrors)
                        .catch(err => Observable.throw(err))
                        .map(this.getJson)
    }

    getShips(groupName, raceName):Observable<{name:string}[]>{
        //return mock.getShipsByGroupAndRace(groupName, raceName);
        return this.http.get(`${this.baseUrl}/groups/${groupName}/races/${raceName}/ships`)
                        .map(this.checkForErrors)
                        .catch(err => Observable.throw(err))
                        .map(this.getJson)
    }

    getShip(groupName, raceName, shipName):Observable<Ship>{
        //return mock.getShipDetailsByGroupRaceAndShipNames(groupName, raceName, shipName);
        return this.http.get(`${this.baseUrl}/groups/${groupName}/races/${raceName}/ships/${shipName}`)
                        .map(this.checkForErrors)
                        .catch(err => Observable.throw(err))
                        .map(this.getJson)
    }


    private getJson(res:Response){
        return res.json();
    }
    private checkForErrors(res: Response):Response{
        if(res.status>=200 && res.status<300){
            return res;
        }else{
            let err = new Error(res.statusText);
            err['response'] = res;
            console.error(err);
            throw err;
        }
    }

}