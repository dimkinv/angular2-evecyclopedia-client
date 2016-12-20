import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {  JsonViewerComponent } from './ui/json-viewer/json-viewer.component';
import {ApiService} from './services/api.service';
@NgModule({
  declarations: [
    AppComponent,
    JsonViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
