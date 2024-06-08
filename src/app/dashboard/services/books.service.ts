import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, catchError, throwError } from 'rxjs';

import { ENVIRONMENT } from 'src/app/environments/environment';
import { IBook } from '../interfaces/book.interface';
import { handleErrors } from 'src/app/shared/helpers/handlers';

@Injectable({
	providedIn: 'root',
})
export class BooksService {
	private baseUrl: string = ENVIRONMENT.BASE_URL;

	constructor(private http: HttpClient) {}

	public getBooks(): Observable<IBook[]> {
		return this.http.get<IBook[]>(`${this.baseUrl}/books`);
	}

	public postBook(book: IBook): Observable<IBook> {
		if (book === null) {
			return throwError(() => new Error('Valores incorrectos'));
		}

		return this.http.post<IBook>(`${this.baseUrl}/books`, book).pipe(
			catchError((response: HttpErrorResponse) => {
				return handleErrors(response);
			})
		);
	}

	public updateBook(id: number, book: IBook): Observable<IBook> {
		if (id === undefined || book === null) {
			return throwError(() => new Error('Valores incorrectos'));
		}

		return this.http.put<IBook>(`${this.baseUrl}/books/${id}`, book).pipe(
			catchError((response: HttpErrorResponse) => {
				return handleErrors(response);
			})
		);
	}

	public deleteBook(id: number): Observable<Object> {
		if (id === null) {
			return throwError(() => new Error(`${id} no es un Id válido`));
		}

		return this.http.delete(`${this.baseUrl}/books/${id}`).pipe(
			catchError((response: HttpErrorResponse) => {
				return handleErrors(response);
			})
		);
	}
}
