import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IsAuthenticatedGuard } from './auth/guards/isAuthenticated.guard';
import { IsAuthenticatedUserGuard } from './auth/guards/isAutheticatedUser.guard';
import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';

const routes: Routes = [
	{
		canActivate: [IsAuthenticatedUserGuard],
		path: 'auth',
		loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
	},
	{
		canActivate: [IsAuthenticatedGuard],
		path: 'dashboard',
		loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
	},
	{
		path: 'home',
		loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
	},
	{
		path: '404',
		component: NotFoundPageComponent,
	},
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{
		path: '**',
		redirectTo: '404',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
