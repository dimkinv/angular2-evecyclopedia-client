import { Routes } from '@angular/router';
import { AboutComponent } from './ui/about/about.component';
import { HomeComponent } from './ui/home/home.component';
import { NewsComponent } from './ui/news/news.component';

export const routes:Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'news',
        component: NewsComponent,
    },
    {
        path: 'news/:newsId',
        component: NewsComponent
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {path: '**', redirectTo: 'home'}
]