import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable, catchError, map, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

import { ENVIRONMENT } from 'src/app/environments/environment';
import { handleErrors } from 'src/app/shared/helpers/handlers';
import { AuthenticationStatus, IAuthenticationResponse, IUserCredentials, UserDataToken } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) {}

  private readonly BASE_URL = ENVIRONMENT.BASE_URL;
  private token: IAuthenticationResponse | null = JSON.parse(localStorage.getItem('token') ?? 'null');

  public isAuthenticated = new BehaviorSubject<AuthenticationStatus>(this.token ? 
                          AuthenticationStatus.authenticated : 
                          AuthenticationStatus.notAuthenticated);

  public login(body: IUserCredentials ): Observable<IAuthenticationResponse | boolean> {
    return this.http.post<IAuthenticationResponse>(`${this.BASE_URL}/accounts/login`, body)
    .pipe(
      tap(response => {
        localStorage.setItem("token", JSON.stringify(response));
        this.token = JSON.parse(localStorage.getItem('token')!);
      }),
      map(() => true),    
      catchError((response: HttpErrorResponse) =>  handleErrors(response)),
    )
  }

  public logout() {
    this.token = null;
    localStorage.removeItem('token');
    this.isAuthenticated.next(AuthenticationStatus.notAuthenticated);
    this.router.navigateByUrl('/auth/login');
  }

  public getUserDataToken(): UserDataToken {
    return jwtDecode<UserDataToken>(this.token?.token!)
  }
}
