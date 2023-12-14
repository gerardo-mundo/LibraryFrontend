import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { MessageService } from 'primeng/api';
import { IBook } from 'src/app/dashboard/interfaces/book.interface';
import * as customValidators from '../../../../shared/helpers/validators';
import { BooksService } from 'src/app/dashboard/services/books.service';
import { UtilitiesService } from 'src/app/dashboard/services/utilities.service';

@Component({
  selector: 'modal-dialog-dashboard',
  templateUrl: 'modal-dialog.component.html',
})
export class ModalDialogComponent implements OnInit {
  ngOnInit() {
    this.utilitiesService.isVisible$.subscribe(isVisible => {
      this.isVisible = isVisible;
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['book']) {
      this.patchFormValues();
    }
  }

  @Input() book!: IBook;
  @Output() updatedBooks = new EventEmitter<IBook[]>();

  public isVisible: boolean = false;
  public submitted: boolean = false;
  public form: FormGroup = this.fb.group({
    title: [this.book?.title, [Validators.required]],
    authorName: [this.book?.authorName, [Validators.required]],
    authorSecondName: [this.book?.authorSecondName],
    lastName: [this.book?.lastName, [Validators.required]],
    authorMotherName: [this.book?.authorMotherName],
    publisher: [this.book?.publisher, [Validators.required]],
    adquisition: [
      this.book?.adquisition,
      [
        Validators.required,
        Validators.minLength(4),
        customValidators.cantBeZero,
      ],
    ],
    year: [
      this.book?.year,
      [Validators.required, Validators.minLength(4), Validators.maxLength(4)],
    ],
    collection: [this.book?.collection, [Validators.required]],
    copies: [
      this.book?.copies,
      [Validators.required, customValidators.cantBeZero],
    ],
  });

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private bookService: BooksService,
    private utilitiesService: UtilitiesService
  ) {}

  hideDialog() {
    this.isVisible = false;
  }

  saveBook() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.bookService.updateBook(this.book.id!, this.form.value).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Se actualizó el registro',
        });
        this.bookService
          .getBooks()
          .subscribe(books => this.updatedBooks.emit(books));
      },
      error: (resp: HttpErrorResponse) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Ups!',
          detail: `${resp}`,
        });
      },
    });

    this.isVisible = false;
  }

  public isValidField(field: string): boolean | null {
    return customValidators.validatorFields(field, this.form);
  }

  public displayError(field: string): string | null {
    return customValidators.errorsDisplayer(field, this.form);
  }

  private patchFormValues() {
    if (this.book) {
      this.form.patchValue(this.book);
    }
  }
}
