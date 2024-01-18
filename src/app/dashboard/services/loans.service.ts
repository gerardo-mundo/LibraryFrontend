import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, catchError } from 'rxjs';

import { ILoan, ILoanWithBooks } from '../interfaces/loan.interface';
import { ENVIRONMENT } from 'src/app/environments/environment';
import { handleErrors } from 'src/app/shared/helpers/handlers';

@Injectable({
  providedIn: 'root'
})
export class LoansService {
  constructor(private http: HttpClient) {}

  private readonly BASE_URL = ENVIRONMENT.BASE_URL;

  public postLoan(data: ILoan) {
    return this.http.post(`${this.BASE_URL}/loans`, data).pipe(
      catchError((response: HttpErrorResponse) => handleErrors(response))
    );
  };

  public getBorrowedBooks(): Observable<ILoanWithBooks[]> {
    return this.http.get<ILoanWithBooks[]>(`${this.BASE_URL}/loans/get-borrowed-books`)
    .pipe(
      catchError((response: HttpErrorResponse) => handleErrors(response))
    )
  };

}
