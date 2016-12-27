import {Routes} from '@angular/router';
import {MainViewComponent} from './ui/main-view/main-view.component';
import {DetailsViewComponent} from './ui/details-view/details-view.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main',
  },
  {
    path: 'main',
    component: MainViewComponent
  },
  {
    path: 'details',
    component: DetailsViewComponent
  },
  {
    path: 'details/:rand',
    component: DetailsViewComponent
  }
];

