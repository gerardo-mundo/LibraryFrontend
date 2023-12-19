// isAuthenticated.guard.ts
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthenticationStatus } from '../interfaces/login.interface';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root',
})
export class IsAuthenticatedGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuthenticated = this.loginService.isAuthenticated;

    if (isAuthenticated === AuthenticationStatus.authenticated || this.loginService.token) {
      return true;
    }

    this.router.navigateByUrl('/auth/login');
    return false;
  }
}

