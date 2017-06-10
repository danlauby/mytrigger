import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ResourcesComponent } from './resources/resources.component';

const appRoutes: Routes = [
    {
        path: '',
        component: MainPageComponent,
    },
    {
        path: 'doctors',
        component: DoctorsComponent,
    },
    {
        path: 'resources',
        component: ResourcesComponent,
      }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
