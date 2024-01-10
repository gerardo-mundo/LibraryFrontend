import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENVIRONMENT } from 'src/app/environments/environment';
import { IAccount, IEmployeeData } from '../interfaces/user.interface';
import { Observable, catchError, of } from 'rxjs';
import { handleErrors } from 'src/app/shared/helpers/handlers';
import { IAuthenticationResponse } from 'src/app/auth/interfaces/login.interface';
import { ApiResponse } from 'src/app/shared/interfaces/httpResponse.interface';

interface passwordConfirmed {
  password: string;
};
@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient) {}

  private BASE_URL = ENVIRONMENT.BASE_URL;
  private readonly headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json-patch+json',
    }),
  };

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

  public updatePassword(newPassword: passwordConfirmed): Observable<ApiResponse<void>|void> {
    return this.http.patch<ApiResponse<void>>(`${this.BASE_URL}/accounts/update-password`, newPassword, this.headers)
    .pipe(
      catchError((response: HttpErrorResponse) => handleErrors(response))
    );
  };
  
}
