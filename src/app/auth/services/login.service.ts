import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, catchError, map, tap } from 'rxjs';

import { ENVIRONMENT } from 'src/app/environments/environment';
import { handleErrors } from 'src/app/shared/helpers/handlers';
import { AuthenticationStatus, IUserCredentials } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private route: Router) { }

  private readonly BASE_URL = ENVIRONMENT.BASE_URL;
  public isAuthenticated = AuthenticationStatus.notAuthenticated;
  public token = JSON.parse(localStorage.getItem('token') ?? '{}');

  public login(body: IUserCredentials ): Observable<boolean> {
    return this.http.post<boolean>(`${this.BASE_URL}/accounts/login`, body)
    .pipe(
      tap(response => localStorage.setItem("token", JSON.stringify(response))),
      map(() => true),    
      catchError((response: HttpErrorResponse) =>  handleErrors(response)),
    )
  }
}
