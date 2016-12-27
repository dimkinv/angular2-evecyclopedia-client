import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MainViewComponent} from './ui/main-view/main-view.component';
import {DetailsViewComponent} from './ui/details-view/details-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    DetailsViewComponent
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
