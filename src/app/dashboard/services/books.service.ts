import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

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
}
