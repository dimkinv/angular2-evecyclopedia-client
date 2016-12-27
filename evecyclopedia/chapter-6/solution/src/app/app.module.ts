import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {ShipDetailsComponent} from './ui/ship-details/ship-details.component';
import {InfoCapsuleComponent} from './ui/ship-details/info-capsule/info-capsule.component';
import {TreeViewComponent} from './ui/tree-view/tree-view.component';
import {TreeNodeComponent} from './ui/tree-view/tree-node/tree-node.component';
import {EllipsisPipe} from './pipes/ellipsis/ellipsis.pipe';
import {ShipsService} from './services/ships.service';
import { ShipEditorComponent } from './ui/ship-editor/ship-editor.component';
import { HomeComponent } from './ui/home/home.component';
//ROUTER MODULE
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import { AboutComponent } from './ui/about/about.component';
import '../rxjs-addons';

@NgModule({
  declarations: [
    AppComponent,
    ShipDetailsComponent,
    InfoCapsuleComponent,
    TreeViewComponent,
    TreeNodeComponent,
    EllipsisPipe,
    ShipEditorComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ ShipsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
