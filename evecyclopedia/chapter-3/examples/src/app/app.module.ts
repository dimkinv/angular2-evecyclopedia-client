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

@NgModule({
  declarations: [
    AppComponent,
    SquareRootPipe,
    NthRootPipe,
    ReminderPipe,
    ParentComponent,
    ChildComponent,
    LifecyclesComponent
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
