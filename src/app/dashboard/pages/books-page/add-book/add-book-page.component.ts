import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';

import { BooksService } from 'src/app/dashboard/services/books.service';
import * as customValidators from 'src/app/shared/helpers/validators';

@Component({
  selector: 'app-add-book-page',
  templateUrl: './add-book-page.component.html',
  styles: [],
})
export class AddBookPageComponent {
  public form: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    authorName: ['', [Validators.required]],
    authorSecondName: [''],
    lastName: ['', [Validators.required]],
    authorMotherName: [''],
    publisher: ['', [Validators.required]],
    adquisition: [0, [Validators.required, Validators.minLength(4)]],
    year: [
      0,
      [Validators.required, Validators.minLength(4), Validators.maxLength(4)],
    ],
    collection: [''],
    copies: [0, [Validators.required, customValidators.cantBeZero]],
  });

  public loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private bookService: BooksService,
    private messageService: MessageService
  ) {}

  public onSave() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;

    this.bookService.postBook(this.form.value).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Libro agregado correctamente',
        });
        this.form.reset();
      },
      error: err => {
        console.log(err);
        this.messageService.add({
          severity: 'error',
          summary: 'Ups',
          detail: 'Hubo un error al agregar el libro',
        });
        this.loading = false;
      },
      complete: () => (this.loading = false),
    });
  }

  public isValidField(field: string): boolean | null {
    return customValidators.validatorFields(field, this.form);
  }

  public displayError(field: string): string | null {
    return customValidators.errorsDisplayer(field, this.form);
  }
}
