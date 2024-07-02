import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [{ path: 'login', component: LoginPageComponent }],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthRoutingModule {}
