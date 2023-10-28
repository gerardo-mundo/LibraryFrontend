import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

import { IBook } from 'src/app/dashboard/interfaces/book.interface';
import { BooksService } from 'src/app/dashboard/services/books.service';
import { UtilitiesService } from 'src/app/dashboard/services/utilities.service';

@Component({
  selector: 'app-edit-book-page',
  templateUrl: './edit-book-page.component.html',
  styles: [],
})
export class EditBookPageComponent implements OnInit {
  ngOnInit(): void {
    this.booksService.getBooks().subscribe(data => (this.books = data));
    this.utilitiesService.setVisibility(false);
  }

  public books: IBook[] = [];
  public book!: IBook;
  public submitted: boolean = false;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private booksService: BooksService,
    private utilitiesService: UtilitiesService
  ) {}

  editBook(book: IBook) {
    this.utilitiesService.setVisibility(true);
    this.book = book;
  }

  deleteBook(book: IBook) {
    this.confirmationService.confirm({
      message: '¿Estás seguro de eliminar: ' + book.title + '?',
      header: 'Confirmar acción',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.booksService.deleteBook(book.id!).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Éxito',
              detail: 'Libro eliminado',
              life: 3000,
            });
            this.books = this.books.filter(val => val.id !== book.id);
          },
          error: (resp: HttpErrorResponse) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: `${resp}`,
              life: 3000,
            });
          },
        });
      },
    });
  }

  public updateBooks(books: IBook[]): void {
    this.books = books;
  }

  @ViewChild('dt') dt!: Table;
  public applyFilterGlobal($event: any, stringVal: string) {
    this.utilitiesService.filtering($event, stringVal, this.dt);
  }
}
