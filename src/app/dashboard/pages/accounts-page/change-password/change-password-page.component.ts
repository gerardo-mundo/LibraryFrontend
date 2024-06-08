import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AccountsService } from 'src/app/dashboard/services/accounts.service';

import * as CustomValidators from 'src/app/shared/helpers/validators';

@Component({
	selector: 'app-change-password-page',
	templateUrl: './change-password-page.component.html',
	styles: [],
})
export class ChangePasswordPageComponent {
	constructor(
		private fb: FormBuilder,
		private accountsService: AccountsService,
		private messageService: MessageService
	) {}

	public loading = false;
	public passwordForm: FormGroup = this.fb.group({
		firstPassword: [
			'',
			[
				Validators.required,
				Validators.minLength(7),
				Validators.pattern('^(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\\d!@#$%^&*()-_+=]{7,}$'),
			],
		],
		password: [
			'',
			[
				Validators.required,
				Validators.minLength(7),
				Validators.pattern('^(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\\d!@#$%^&*()-_+=]{7,}$'),
			],
		],
	});

	public onChangePassword() {
		const { firstPassword, password } = this.passwordForm.value;
		const body = { password };

		if (firstPassword !== password) {
			this.messageService.add({
				severity: 'error',
				summary: 'Error',
				detail: 'Las contraseñas deben ser iguales',
			});
			this.passwordForm.markAllAsTouched();
			return;
		}

		this.loading = true;

		this.accountsService.updatePassword(body).subscribe({
			next: () => {
				this.messageService.add({
					severity: 'success',
					summary: 'Éxito',
					detail: 'Contraseña actualizada',
				});

				this.loading = false;
			},
			error: (err) => {
				this.messageService.add({
					severity: 'error',
					summary: 'Ups',
					detail: `${err}`,
				});

				this.loading = false;
			},
		});
	}

	public isValidField(value: string) {
		return CustomValidators.validatorFields(value, this.passwordForm);
	}

	public displayError(value: string) {
		return CustomValidators.errorsDisplayer(value, this.passwordForm);
	}
}
