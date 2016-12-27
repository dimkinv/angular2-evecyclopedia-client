import { Routes } from '@angular/router';
import { AboutComponent } from './ui/about/about.component';
import { HomeComponent } from './ui/home/home.component';
import { SubHomeComponent } from './ui/home/sub-home/sub-home.component';
import { NewsComponent } from './ui/news/news.component';
import { HeaderComponent } from './ui/header/header.component';
import { AuthGuard } from './auth/auth-guard/auth.guard';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'sub',
                component: SubHomeComponent
            }
        ]
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'news',
        // canActivate: [AuthGuard],
        component: NewsComponent,
    },
    {
        path: 'news/:groupId',
        component: NewsComponent
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    // {
    //     path: '',
    //     component: HeaderComponent,
    //     outlet: 'header'
    // },
    { path: '**', redirectTo: 'home' }
]