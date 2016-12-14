import { Component } from '@angular/core';
import {Ship} from './models/ship.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  ship:Ship;
}
