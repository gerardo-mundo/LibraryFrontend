import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';

import * as customValidators from './../../../../shared/helpers/validators';

import { ThesisService } from 'src/app/dashboard/services/thesis.service';

@Component({
	selector: 'app-add-thesis-page',
	templateUrl: './add-thesis-page.component.html',
})
export class AddThesisPageComponent {
	public form: FormGroup = this.fb.group({
		title: ['', [Validators.required]],
		authorOne: ['', [Validators.required]],
		authorTwo: [''],
		authorThree: [''],
		assessor: ['', [Validators.required]],
		year: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
	});

	public loading: boolean = false;

	constructor(
		private fb: FormBuilder,
		private thesisService: ThesisService,
		private messageService: MessageService
	) {}

	public onSave() {
		if (this.form.invalid) {
			this.form.markAllAsTouched();
			return;
		}

		this.loading = true;

		this.thesisService.postThesis(this.form.value).subscribe({
			next: () => {
				this.messageService.add({
					severity: 'success',
					summary: 'Éxito',
					detail: 'Tesis agregada correctamente',
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
