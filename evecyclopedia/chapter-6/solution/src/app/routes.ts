import { Routes } from '@angular/router';
import {HomeComponent} from './ui/home/home.component';
import {ShipEditorComponent} from './ui/ship-editor/ship-editor.component';
import {AboutComponent} from './ui/about/about.component'


export const routes:Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },    
    {
        path: 'group/:groupName/race/:raceName/ship/:shipName',
        component: ShipEditorComponent
    },
    {path: '**', redirectTo: ''}
]