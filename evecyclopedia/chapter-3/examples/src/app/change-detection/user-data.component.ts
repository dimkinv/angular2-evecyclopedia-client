import {Component, Input, OnChanges, SimpleChange, ChangeDetectionStrategy} from '@angular/core';

export class User{
  firstName: string;
  lastName: string;
  address: string;
}

@Component({
  selector: 'user-data',
  templateUrl: './user-data.component.html',
})
export class UserComponent{
  public user: User;

  constructor(){
    this.user = new User();
  }

  newUser(){
    this.user = new User();
    this.user.firstName = 'Danny';
  }
}
