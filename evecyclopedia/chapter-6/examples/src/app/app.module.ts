import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//ROUTER MODULE
import { RouterModule } from '@angular/router';
import { routes } from './routes';


import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { AboutComponent } from './ui/about/about.component';
import { HomeComponent } from './ui/home/home.component';
import { SubHomeComponent } from './ui/home/sub-home/sub-home.component';
import { NewsComponent } from './ui/news/news.component';

import { AuthService } from './auth/auth-service/auth.service';
import { AuthGuard } from './auth/auth-guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    NewsComponent,
    SubHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
