import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENVIRONMENT } from 'src/app/environments/environment';
import { AuthenticationStatus, IUserCredentials } from '../interfaces/login.interface';
import { Observable, catchError, map, tap } from 'rxjs';
import { handleErrors } from 'src/app/shared/helpers/handlers';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

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
