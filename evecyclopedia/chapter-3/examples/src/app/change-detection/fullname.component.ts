import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {User} from "./user-data.component";

@Component({
  selector: 'fullname',
  templateUrl: './fullname.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullnameComponent{
  @Input()
  user: User;
}
