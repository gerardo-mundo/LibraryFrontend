import { Component } from '@angular/core';

import * as customValidators from './../../../../shared/helpers/validators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { PublicationsService } from 'src/app/dashboard/services/publications.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
	selector: 'app-add-publication-page',
	templateUrl: './add-publication-page.component.html',
	styles: [],
})
export class AddPublicationPageComponent {
	constructor(
		private fb: FormBuilder,
		private messageService: MessageService,
		private publicationService: PublicationsService
	) {}

	public loading: boolean = false;

	public publicationTypes = [
		{ name: 'Artículo', value: 1 },
		{ name: 'Publicación', value: 2 },
		{ name: 'Revista', value: 3 },
	];

	public value!: number;

	public form: FormGroup = this.fb.group({
		type: [null, [Validators.required]],
		title: ['', [Validators.required, Validators.maxLength(150)]],
		author: ['', [Validators.required, Validators.maxLength(120), Validators.minLength(5)]],
		authorTwo: ['', [Validators.maxLength(120), Validators.minLength(5)]],
		authorThree: ['', [Validators.maxLength(120), Validators.minLength(5)]],
		authorFour: ['', [Validators.maxLength(120), Validators.minLength(5)]],
		publisher: ['', [Validators.required, Validators.maxLength(50)]],
		isbn: ['', [Validators.maxLength(16), Validators.minLength(16)]],
		issn: ['', [Validators.maxLength(9), Validators.minLength(9)]],
		year: [null, [Validators.required, Validators.maxLength(4), Validators.minLength(4)]],
		vol: ['', [Validators.required, Validators.maxLength(10)]],
	});

	public onSave() {
		if (this.form.invalid || typeof this.form.value.type !== 'number') {
			this.form.markAllAsTouched();
			return;
		}

		this.loading = true;

		this.publicationService.postPublication(this.form.value).subscribe({
			next: () => {
				this.messageService.add({
					severity: 'success',
					summary: 'Éxito',
					detail: 'Publicación agregada correctamente',
				});
				this.loading = false;

				this.form.reset();
			},
			error: (resp: HttpErrorResponse) => {
				this.messageService.add({
					severity: 'error',
					summary: 'Ups',
					detail: `${resp}`,
				});

				this.loading = false;
			},
		});
	}

	public isValidField(field: string): boolean | null {
		return customValidators.validatorFields(field, this.form);
	}

	public displayError(field: string): string | null {
		return customValidators.errorsDisplayer(field, this.form);
	}
}
