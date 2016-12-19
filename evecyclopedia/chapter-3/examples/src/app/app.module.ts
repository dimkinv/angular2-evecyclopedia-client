import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {SquareRootPipe} from './square-root-pipe/square-root.pipe';
import {NthRootPipe} from './nth-root-pipe/nth-root.pipe';
import {ReminderPipe} from './reminder-pipe/reminder.pipe';
import {ParentComponent} from './parent-component/parent.component';
import {ChildComponent} from './child-component/child.component';
import {LifecyclesComponent} from './lifecycles/lifecycles.component';
import {DetectInputChangesComponent} from './detect-input-changes/detect-input-changes.component'
import {UserComponent} from './change-detection/user-data.component'
import {FullnameComponent} from './change-detection/fullname.component'
import {TickComponent} from './tick/tick.component';
@NgModule({
  declarations: [
    AppComponent,
    SquareRootPipe,
    NthRootPipe,
    ReminderPipe,
    ParentComponent,
    ChildComponent,
    LifecyclesComponent,
    DetectInputChangesComponent,
    UserComponent,
    FullnameComponent,
    TickComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
