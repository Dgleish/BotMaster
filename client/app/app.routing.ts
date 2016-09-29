import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotListComponent } from './bot-list.component';
import { DashboardComponent } from './dashboard.component';
import { BotComponent } from './bot.component';

const appRoutes: Routes = [
    {
        path: 'botlist',
        component: BotListComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: 'botlist',
        pathMatch: 'full'
    },
    {
        path: 'bot/:id',
        component: BotComponent,
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
