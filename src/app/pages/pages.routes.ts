import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const pagesRoutes: Routes = [
	{
		path: 'home',
		component: HomeComponent,
		pathMatch: 'full'
		//canActivate: [AuthGuard]
    },
    {
        path: 'about',
		component: AboutComponent,
		pathMatch: 'full'
    },
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: '**',
		redirectTo: '/home',
		pathMatch: 'full'
	}
];
