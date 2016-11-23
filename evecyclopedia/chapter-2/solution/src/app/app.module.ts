import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {ShipDetailsComponent, InfoCapsuleComponent, LeftMenuComponent} from './ui';
import {MainContainerComponent} from './containers';
import { EllipsisPipe } from './ui/ship-details/ellipsis/ellipsis.pipe';

//router
import { RouterModule } from '@angular/router';
import {routes} from './routes';

@NgModule({
  declarations: [
    MainContainerComponent,
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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
