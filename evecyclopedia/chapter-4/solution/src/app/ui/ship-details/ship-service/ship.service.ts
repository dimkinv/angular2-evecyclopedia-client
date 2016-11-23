import {Injectable} from '@angular/core';
import {ApiService} from '../../../services/api.service';

@Injectable()
export class ShipService{
    constructor(private apiService:ApiService){}

    getSpaceshipsList(){
        return this.apiService.get('/spaceships')
    }
    getSpaceship(spaceshipId){
        return this.apiService.get(spaceshipId)
    }
}