import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';


export const appRoutes: Routes = [
	{
		path: '',
		loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
	}
];
