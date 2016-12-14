import {Component, OnInit } from '@angular/core';
import {UserService, IUserDetails} from '../user-service/user.service';

@Component({
    selector:'ranks-table',
    templateUrl: './ranks-table.component.html',
    styleUrls: ['./ranks-table.component.less']
})
export class RanksTableComponent{
    users:IUserDetails[];

    constructor(private userService:UserService){
        this.users = this.userService.allUsers
    }
}