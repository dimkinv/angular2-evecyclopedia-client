import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {ShipDetailsComponent, InfoCapsuleComponent, LeftMenuComponent} from './ui';
import {EllipsisPipe} from './pipes';
import {ApiService, ShipService} from './services';

@NgModule({
  declarations: [
    AppComponent,
    ShipDetailsComponent,
    InfoCapsuleComponent,
    LeftMenuComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    ApiService,
    ShipService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
