import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { pagesRoutes } from './pages.routes';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

@NgModule({
	declarations: [
		HomeComponent,
		AboutComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(pagesRoutes)
	]
})
export class PagesModule { }