import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ShipsDIComponent} from './with-di/ships/ships.component';
import {ShipsComponent} from './without-di/ships/ships.component';
import {UserService} from './user-service/user.service';
import {RanksTableComponent} from './ranks-table/ranks-table.component';
import { AddUserComponent} from './add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ShipsComponent,
    ShipsDIComponent,
    RanksTableComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService],//App module level service registration
  bootstrap: [AppComponent]
})
export class AppModule {
}
