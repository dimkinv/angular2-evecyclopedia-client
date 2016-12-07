import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName:string;
  lastName:string;
  displayLifecycleComponent:boolean=false;
  title = 'app works!';
  number:number = 100;
  nthR:number = 2;

  numbers = [1,2,3,4,5,6,7,8,9];
  rem:number = 2;
  newNumber: number;
}
