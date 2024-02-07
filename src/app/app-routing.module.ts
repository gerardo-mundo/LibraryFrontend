import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';
import { IsAuthenticatedGuard } from './auth/guards/isAuthenticated.guard';
import { IsAuthenticatedUserGuard } from './auth/guards/isAutheticatedUser.guard';

const routes: Routes = [
  {
    canActivate: [IsAuthenticatedUserGuard],
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    canActivate: [IsAuthenticatedGuard],
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: '404',
    component: NotFoundPageComponent,
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
