import { Component, OnInit } from '@angular/core';

import { IBook } from '../../../interfaces/book.interface';

import { BooksService } from 'src/app/dashboard/services/books.service';

@Component({
	selector: 'app-books-page',
	templateUrl: './books-page.component.html',
	styles: [],
})
export class BooksPageComponent implements OnInit {
	ngOnInit(): void {
		this.booksService.getBooks().subscribe((data) => (this.books = data));
	}

	public books: IBook[] = [];

	constructor(private booksService: BooksService) {}
}
