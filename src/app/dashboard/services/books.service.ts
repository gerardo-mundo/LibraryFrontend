import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private baseUrl: string = environment.baseUrl;
  public page: number = 1;
  public recordsPeerPage: number = 20;

  constructor(private http: HttpClient) {}
}
