import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, catchError, throwError } from 'rxjs';

import { ILoan, ILoanWithBooks } from '../interfaces/loan.interface';

import { ENVIRONMENT } from 'src/app/environments/environment';
import { handleErrors } from 'src/app/shared/helpers/handlers';

@Injectable({
	providedIn: 'root',
})
export class LoansService {
	constructor(private http: HttpClient) {}

	private readonly BASE_URL = ENVIRONMENT.BASE_URL;

	public postLoan(data: ILoan) {
		return this.http
			.post(`${this.BASE_URL}/loans`, data)
			.pipe(catchError((response: HttpErrorResponse) => handleErrors(response)));
	}

	public getBorrowedBooks(): Observable<ILoanWithBooks[]> {
		return this.http
			.get<ILoanWithBooks[]>(`${this.BASE_URL}/loans/get-borrowed-books`)
			.pipe(catchError((response: HttpErrorResponse) => handleErrors(response)));
	}

	public updateLoan(id: number): Observable<HttpResponse<null>> {
		if (!id) throwError(() => new Error('Se necesita un ID'));

		const currentDate = new Date();
		const year = currentDate.getFullYear();
		const month = currentDate.getMonth() + 1;
		const day = currentDate.getDate();

		const formatedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

		const patchDocument = [
			{
				path: '/DevolutionDate',
				op: 'replace',
				value: formatedDate,
			},
			{
				path: '/Returned',
				op: 'replace',
				value: true,
			},
		];

		return this.http
			.patch<HttpResponse<null>>(`${this.BASE_URL}/loans/${id}`, patchDocument)
			.pipe(catchError((response: HttpErrorResponse) => handleErrors(response)));
	}

	public deleteLoan(id: number): Observable<HttpResponse<null>> {
		return this.http
			.delete<HttpResponse<null>>(`${this.BASE_URL}/loans/${id}`)
			.pipe(catchError((response: HttpErrorResponse) => handleErrors(response)));
	}
}
