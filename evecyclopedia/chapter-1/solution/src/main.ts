import './polyfills.ts';

//library for using Angular in a web browser with JIT compilation
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; 

import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app';

import {initData} from './app.data';
initData();

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
