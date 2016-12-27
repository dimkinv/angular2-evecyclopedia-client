import { Routes } from '@angular/router';
import {HomeComponent} from './ui/home/home.component';
import { CreateShipComponent } from './ui/ship-editor/create-ship.component';
import { UpdateShipComponent } from './ui/ship-editor/update-ship.component';
import {AboutComponent} from './ui/about/about.component'


export const routes:Routes = [
    {
        path: 'about',
        component: AboutComponent,
    },    
    {
        path: 'group/:groupName/race/:raceName/ship/:shipName',
        component: UpdateShipComponent
    },
    {
        path: 'new-ship',
        component: CreateShipComponent
    },
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: '**',
        redirectTo: ''
    }
]