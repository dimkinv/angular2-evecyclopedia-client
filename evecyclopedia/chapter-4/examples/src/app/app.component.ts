import { Component } from '@angular/core';
import {UserService} from './user-service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userDetails;
  constructor(private userService:UserService){}
 
}
