import {Routes} from '@angular/router';
import {MainViewComponent} from './ui/main-view/main-view.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main',
  },
  {
    path: 'main',
    component: MainViewComponent
  }
];

