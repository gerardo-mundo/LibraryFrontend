// isAuthenticated.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthenticationStatus } from '../interfaces/login.interface';
import { AuthenticationService } from '../services/Authentication.service';

@Injectable({
	providedIn: 'root',
})
export class IsAuthenticatedGuard implements CanActivate {
	constructor(
		private loginService: AuthenticationService,
		private router: Router
	) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		const isAuthenticated = this.loginService.isAuthenticated.getValue();

		if (isAuthenticated === AuthenticationStatus.authenticated) {
			return true;
		}

		this.router.navigateByUrl('/auth/login');
		return false;
	}
}
