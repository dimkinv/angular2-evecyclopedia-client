import { Routes } from '@angular/router';
import {ShipDetailsComponent} from './ui';
import {MainContainerComponent } from './containers';

export const routes:Routes = [
    {
        path: '',
        component: MainContainerComponent, 
        children: [
            {
                path: '',
                component: ShipDetailsComponent
            }
        ]
    },
    {path: '**', redirectTo: ''}
]