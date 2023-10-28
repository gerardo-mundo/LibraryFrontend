import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';

import { Observable, catchError } from 'rxjs';

import { environment } from 'src/app/environments/environment';
import { IThesis } from '../interfaces/thesis.interface';
import { handleErrors } from 'src/app/shared/helpers/handlers';

@Injectable()
export class ThesisService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  public getThesis(): Observable<IThesis[]> {
    return this.http
      .get<IThesis[]>(`${this.baseUrl}/thesis`)
      .pipe(catchError((error: HttpErrorResponse) => handleErrors(error)));
  }

  public postThesis(thesis: IThesis): Observable<HttpResponse<IThesis>> {
    return this.http
      .post<HttpResponse<IThesis>>(`${this.baseUrl}/thesis`, thesis)
      .pipe(catchError(error => handleErrors(error)));
  }

  public deleteThesis(id: number): Observable<HttpResponse<IThesis>> {
    return this.http
      .delete<HttpResponse<IThesis>>(`${this.baseUrl}/thesis/${id}`)
      .pipe(catchError(error => handleErrors(error)));
  }

  public updateThesis(
    id: number,
    thesis: IThesis
  ): Observable<HttpResponse<IThesis>> {
    return this.http
      .put<HttpResponse<IThesis>>(`${this.baseUrl}/thesis/${id}`, thesis)
      .pipe(catchError(error => handleErrors(error)));
  }
}
