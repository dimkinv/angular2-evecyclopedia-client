import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { ZippyComponent } from './components/zippy.component';
import { OnHoverDirective } from './directives/on-hover.directive';
import { ZippyPipe } from './pipes/zippy.pipe';
import { ZippyService } from './services/zippy.service';
import { SubZippyComponent } from './components/sub-zippy/sub-zippy.component';

@NgModule({
  declarations: [
    AppComponent,
    ZippyComponent,
    OnHoverDirective,
    ZippyPipe,
    SubZippyComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ZippyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
