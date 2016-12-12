import {Component, Input} from '@angular/core';
import {User} from "./user-data.component";

@Component({
  selector: 'fullname',
  templateUrl: './fullname.component.html',
})
export class FullnameComponent{
  @Input()
  user: User;
}
