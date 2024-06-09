import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, catchError } from 'rxjs';

import { IUser } from '../interfaces/user.interface';

import { ENVIRONMENT } from 'src/app/environments/environment';
import { handleErrors } from 'src/app/shared/helpers/handlers';

@Injectable({
	providedIn: 'root',
})
export class UsersService {
	private BASE_URL = ENVIRONMENT.BASE_URL;

	constructor(private http: HttpClient) {}

	public postUser(data: IUser): Observable<HttpResponse<null>> {
		return this.http.post<HttpResponse<null>>(`${this.BASE_URL}/users`, data).pipe(
			catchError((error: HttpErrorResponse) => {
				return handleErrors(error);
			})
		);
	}

	public getStudents(): Observable<IUser[]> {
		return this.http.get<IUser[]>(`${this.BASE_URL}/users/students`).pipe(
			catchError((error: HttpErrorResponse) => {
				return handleErrors(error);
			})
		);
	}

	public getProfessors(): Observable<IUser[]> {
		return this.http.get<IUser[]>(`${this.BASE_URL}/users/professors`).pipe(
			catchError((error: HttpErrorResponse) => {
				return handleErrors(error);
			})
		);
	}

	public getAdministratives(): Observable<IUser[]> {
		return this.http.get<IUser[]>(`${this.BASE_URL}/users/administratives`).pipe(
			catchError((error: HttpErrorResponse) => {
				return handleErrors(error);
			})
		);
	}

	public getAllUsers(): Observable<IUser[]> {
		return this.http
			.get<IUser[]>(`${this.BASE_URL}/users/users`)
			.pipe(catchError((response: HttpErrorResponse) => handleErrors(response)));
	}
}
