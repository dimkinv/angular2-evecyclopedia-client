import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//ROUTER MODULE
import {RouterModule} from '@angular/router';
import {routes} from './routes';


import { AppComponent } from './app.component';
import {HeaderComponent} from './ui/header/header.component';
import { AboutComponent } from './ui/about/about.component';
import { HomeComponent } from './ui/home/home.component';
import { NewsComponent } from './ui/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
