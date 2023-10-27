import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, catchError, throwError } from 'rxjs';

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
}
