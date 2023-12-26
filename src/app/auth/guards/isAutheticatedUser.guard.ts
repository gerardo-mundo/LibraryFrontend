import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthenticationStatus } from '../interfaces/login.interface';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root',
})
export class IsAuthenticatedUserGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuthenticated = this.loginService.isAuthenticated.getValue();
    
    if (isAuthenticated === AuthenticationStatus.authenticated) {
        this.router.navigateByUrl('/dashboard/welcome');
        return false;
    }

    return true;
  }
}