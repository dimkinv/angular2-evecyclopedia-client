import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable()
export class ShipService{
    constructor(private apiService:ApiService){}

    getSpaceshipsList(){
        return this.apiService.get('/spaceships')
    }
    getSpaceship(spaceshipId){
        return this.apiService.get(spaceshipId)
    }
    getGroups(){
         return this.apiService.get('/groups')
    }
    getGroupRaces(groupName){
        return this.apiService.get(`/groups/${groupName}/races`)
    }
}