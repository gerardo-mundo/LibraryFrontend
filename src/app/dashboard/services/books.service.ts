import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, catchError, throwError } from 'rxjs';

import { environment } from 'src/app/environments/environment';
import { IBook } from '../pages/books-page/interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private baseUrl: string = environment.baseUrl;
  public page: number = 1;
  private recordsPeerPage: number = 20;

  constructor(private http: HttpClient) {}

  public getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(
      `${this.baseUrl}/books?Page=${this.page}&RecordsPeerage=${this.recordsPeerPage}`
    );
  }

  public postBook(book: IBook): Observable<IBook> {
    if (book === null) {
      throwError(() => new Error('Valores incorrectos'));
    }

    return this.http.post<IBook>(`${this.baseUrl}/books`, book).pipe(
      catchError(err => {
        return throwError(() => new Error(err));
      })
    );
  }
}
