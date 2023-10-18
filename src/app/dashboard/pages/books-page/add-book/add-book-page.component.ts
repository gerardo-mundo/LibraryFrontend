import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { errorsDisplayer, validatorFields } from 'src/app/helpers/validators';

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
    year: [0, [Validators.required, Validators.minLength(4)]],
    collection: [''],
    copies: [0, [Validators.required, Validators.min(1)]],
  });

  constructor(private fb: FormBuilder) {}

  public onSave() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log(this.form.value);
  }

  public isValidField(field: string): boolean | null {
    return validatorFields(field, this.form);
  }

  public displayError(field: string): string | null {
    return errorsDisplayer(field, this.form);
  }
}
