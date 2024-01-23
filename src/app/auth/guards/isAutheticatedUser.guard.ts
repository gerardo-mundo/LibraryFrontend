import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthenticationStatus } from '../interfaces/login.interface';
import { AuthenticationService } from '../services/Authentication.service';

@Injectable({
  providedIn: 'root',
})
export class IsAuthenticatedUserGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuthenticated = this.authenticationService.isAuthenticated.getValue();
    
    if (isAuthenticated === AuthenticationStatus.authenticated) {
        this.router.navigateByUrl('/dashboard/welcome');
        return false;
    }

    return true;
  }
}