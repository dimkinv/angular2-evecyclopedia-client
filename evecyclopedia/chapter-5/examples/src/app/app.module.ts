import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {InputStreamFetchComponent} from './ui/input-stream-fetch/input-stream-fetch.component';
import {JsonViewerComponent} from './ui/json-viewer/json-viewer.component';

import {JsonBeautify} from './pipes/json-beutify.pipe';
import {ApiService} from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    InputStreamFetchComponent,
    JsonViewerComponent,JsonBeautify
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
