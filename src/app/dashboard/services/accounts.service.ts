import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENVIRONMENT } from 'src/app/environments/environment';
import { IAccount, IEmployeeData } from '../interfaces/user.interface';
import { Observable, catchError } from 'rxjs';
import { handleErrors } from 'src/app/shared/helpers/handlers';
import { IAuthenticationResponse } from 'src/app/auth/interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient) {}

  private BASE_URL = ENVIRONMENT.BASE_URL;

  public createAccount(data: IAccount): Observable<IAuthenticationResponse> {
    return this.http.post<IAuthenticationResponse>(`${this.BASE_URL}/accounts/register`, data).pipe(
      catchError((response: HttpErrorResponse) => {
        return handleErrors(response);
      })
    );
  };
  
  public getAccountsList(): Observable<IEmployeeData[]> {
    return this.http.get<IEmployeeData[]>(`${this.BASE_URL}/accounts/get-accounts`).pipe(
      catchError((response: HttpErrorResponse ) => handleErrors(response))
    );
  };
}
