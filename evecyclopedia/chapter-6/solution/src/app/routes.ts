import { Routes } from '@angular/router';
import {HomeComponent} from './ui/home/home.component';
import { ShipDetailsComponent } from './ui/ship-details/ship-details.component';
export const routes:Routes = [
    {
        path: 'group',
        component: HomeComponent,
    },
    {
        path: 'group/:groupName',
        component: HomeComponent,
    },
    {
        path: 'group/:groupName/race',
        component: HomeComponent,
    },
    {
        path: 'group/:groupName/race/:raceName',
        component: HomeComponent,
    },
    {
        path: 'group/:groupName/race/:raceName/ship',
        component: HomeComponent,
    },
    {
        path: 'group/:groupName/race/:raceName/ship/:shipName',
        component: HomeComponent,  
        children: [{
            path: '',
            component: ShipDetailsComponent
        }]
    },
    {path: '**', redirectTo: 'group'}
]