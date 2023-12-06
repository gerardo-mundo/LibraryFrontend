import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, catchError, throwError } from 'rxjs';

import { IPublication } from '../interfaces/publication.interface';
import { ENVIRONMENT } from 'src/app/environments/environment';
import { handleErrors } from 'src/app/shared/helpers/handlers';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  private baseUrl: string = ENVIRONMENT.BASE_URL;

  constructor(private http: HttpClient) {}

  public getPublications(): Observable<IPublication[]> {
    return this.http.get<IPublication[]>(
      `${this.baseUrl}/publications`
    );
  }

  public postPublication(publication: IPublication): Observable<IPublication> {
    if (publication === null) {
      return throwError(() => new Error('Valores incorrectos'));
    }

    return this.http.post<IPublication>(`${this.baseUrl}/publications`, publication).pipe(
      catchError((response: HttpErrorResponse) => {
        return handleErrors(response);
      })
    );
  }

  public updatePublication(id: number, Publication: IPublication): Observable<IPublication> {
    if (id === undefined || Publication === null) {
      return throwError(() => new Error('Valores incorrectos'));
    }

    return this.http.put<IPublication>(`${this.baseUrl}/Publications/${id}`, Publication).pipe(
      catchError((response: HttpErrorResponse) => {
        return handleErrors(response);
      })
    );
  }

  public deletePublication(id: number): Observable<Object> {
    if (id === null) {
      return throwError(() => new Error(`${id} no es un Id válido`));
    }

    return this.http.delete(`${this.baseUrl}/publications/${id}`).pipe(
      catchError((response: HttpErrorResponse) => {
        return handleErrors(response);
      })
    );
  }
}
