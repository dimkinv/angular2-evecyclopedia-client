import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable()
export class ShipService{
    constructor(private apiService:ApiService){}

    getGroups(){
         return this.apiService.get('/groups')
    }
    getGroupRaces(groupName){
        return this.apiService.get(`/groups/${groupName}/races`)
    }
    getShipsByGroupAndRace(groupName, race){
        return this.apiService.get(`/groups/${groupName}/races/${race}/ships`)
    }
    getShipDetails(groupName, race, shipName){
      return this.apiService.get(`/groups/${groupName}/races/${race}/ships/${shipName}`)
    }
    getNewShipModel(){
      return{
        name: 'NEW',
        description: '',
        group: '',
        race: '',
        mass: '',
        volume: '',
        capacity: '',
        meta_group_name: ''
      }
    }
}
