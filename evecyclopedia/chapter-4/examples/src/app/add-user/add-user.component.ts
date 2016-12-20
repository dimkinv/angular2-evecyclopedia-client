import {Component, OnInit } from '@angular/core';
import {UserService} from '../user-service/user.service';

@Component({
    selector:'add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.less']
})
export class AddUserComponent{
    firstName:string;
    lastName:string;
    points: number;

    constructor(private userService:UserService){
        this._resetInputs();
    }

    add(){
        this.userService.addUser({
            firstName: this.firstName,
            lastName: this.lastName,
            points: this.points
        });
        this._resetInputs();
    }

    _resetInputs(){
        this.firstName = '';
        this.lastName = '';
        this.points = 0;
    }
}
