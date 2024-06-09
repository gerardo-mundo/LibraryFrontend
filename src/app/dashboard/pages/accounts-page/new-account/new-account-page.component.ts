import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';

import { IAccount } from 'src/app/dashboard/interfaces/user.interface';
import { AccountsService } from 'src/app/dashboard/services/accounts.service';
import * as CustomValidators from 'src/app/shared/helpers/validators';

@Component({
	selector: 'app-new-account-page',
	templateUrl: './new-account-page.component.html',
	styles: [],
})
export class NewAccountPageComponent {
	constructor(
		private fb: FormBuilder,
		private accountsService: AccountsService,
		private messageService: MessageService
	) {}

	public registerForm: FormGroup = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: [
			'',
			[
				Validators.required,
				Validators.minLength(7),
				Validators.pattern('^(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\\d!@#$%^&*()-_+=]{7,}$'),
			],
		],
		name: ['', [Validators.required, Validators.maxLength(100)]],
		lastName: ['', [Validators.required, Validators.maxLength(100)]],
		employeeKey: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
	});
	public loading = false;

	public onNewAccount() {
		if (this.registerForm.invalid) {
			this.registerForm.markAllAsTouched();
			return;
		}

		this.loading = true;

		this.accountsService.createAccount(this.registerForm.value).subscribe({
			next: () => {
				this.messageService.add({
					severity: 'success',
					summary: 'Éxito',
					detail: 'Publicación agregada correctamente',
				});

				this.loading = false;

				this.registerForm.reset();
			},
			error: (resp) => {
				this.messageService.add({
					severity: 'error',
					summary: 'Ups',
					detail: `${resp}`,
				});

				this.loading = false;
			},
		});
	}

	public isValidField(value: string) {
		return CustomValidators.validatorFields(value, this.registerForm);
	}

	public displayError(value: string) {
		return CustomValidators.errorsDisplayer(value, this.registerForm);
	}
}
