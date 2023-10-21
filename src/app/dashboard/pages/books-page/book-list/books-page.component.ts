import { Component, OnInit } from '@angular/core';
import { IBook } from '../interfaces/book.interface';
import { Observable } from 'rxjs';
import { BooksService } from 'src/app/dashboard/services/books.service';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styles: [],
})
export class BooksPageComponent implements OnInit {
  ngOnInit(): void {
    this.getBooksList();
  }

  public books: IBook[] = [];

  constructor(private booksService: BooksService) {}

  public getBooksList() {
    return this.booksService.getBooks().subscribe(bl => (this.books = bl));
  }
}
