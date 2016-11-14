import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {ShipDetailsComponent, InfoCapsuleComponent, LeftMenuComponent} from './ui';


@NgModule({
  declarations: [
    AppComponent,
    ShipDetailsComponent,
    InfoCapsuleComponent,
    LeftMenuComponent

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
