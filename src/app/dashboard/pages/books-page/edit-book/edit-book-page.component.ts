import { Component, OnInit } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';

import { BooksService } from 'src/app/dashboard/services/books.service';
import { IBook } from '../interfaces/book.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-book-page',
  templateUrl: './edit-book-page.component.html',
  styles: [],
})
export class EditBookPageComponent implements OnInit {
  ngOnInit(): void {
    this.booksService.getBooks().subscribe(data => (this.books = data));
  }

  public books: IBook[] = [];
  //public isVisible: boolean = false;
  public book: any;
  public submitted: boolean = false;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private booksService: BooksService
  ) {}

  openNew() {
    this.book = {};
    this.submitted = false;
    //this.isVisible = false;
  }

  editBook() {
    this.booksService.setVisibility(true);
  }

  deleteBook(book: IBook) {
    this.confirmationService.confirm({
      message: '¿Estás seguro de eliminar: ' + book.title + '?',
      header: 'Confirmar acción',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.books = this.books.filter(val => val.id !== book.id);

        this.booksService.deleteBook(book.id!).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Éxito',
              detail: 'Libro eliminado',
              life: 3000,
            });
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

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }
}
