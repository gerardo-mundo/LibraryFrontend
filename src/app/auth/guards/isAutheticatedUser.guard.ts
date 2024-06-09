import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthenticationStatus } from '../interfaces/login.interface';
import { AuthenticationService } from '../services/Authentication.service';

@Injectable({
	providedIn: 'root',
})
export class IsAuthenticatedUserGuard implements CanActivate {
	constructor(
		private authenticationService: AuthenticationService,
		private router: Router
	) {}

	canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean {
		const isAuthenticated = this.authenticationService.isAuthenticated.getValue();

		if (isAuthenticated === AuthenticationStatus.authenticated) {
			this.router.navigateByUrl('/dashboard/welcome');
			return false;
		}

		return true;
	}
}
