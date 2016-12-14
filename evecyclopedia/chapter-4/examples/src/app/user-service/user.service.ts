import {Injectable} from '@angular/core';

export interface IUserDetails{
    firstName:string;
    lastName:string;
    points:number;
}


@Injectable()
export class UserService{
    userDetails:IUserDetails;
    allUsers:IUserDetails[] = [];

    constructor(){
        this.userDetails = {
            firstName: 'Keanu',
            lastName: 'Reeves',
            points: 3000
        }
        this.allUsers.push(this.userDetails);
    }

    addUser(newUser:IUserDetails){
        this.allUsers.push(newUser);
    }
}