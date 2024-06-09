import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';
import { CheckboxChangeEvent } from 'primeng/checkbox';

import { AuthenticationStatus } from '../../interfaces/login.interface';
import { AuthenticationService } from '../../services/Authentication.service';
import { decrypt, encrypt } from '../../utils/encrypt';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styles: [],
})
export class LoginPageComponent implements OnInit {
	constructor(
		private authService: AuthenticationService,
		private fb: FormBuilder,
		private messageService: MessageService,
		private router: Router
	) {}

	ngOnInit(): void {
		const decryptedData = JSON.parse(localStorage.getItem('creds') ?? 'null');

		const creds = {
			email: decryptedData?.email,
			password: decrypt(decryptedData?.password),
		};

		this.loginForm.patchValue(creds);
	}

	public isLoading: boolean = false;

	public loginForm: FormGroup = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: [
			'',
			[
				Validators.required,
				Validators.pattern('^(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\\d!@#$%^&*()-_+=]{7,}$'),
			],
		],
		isChecked: localStorage.getItem('creds') ? true : false,
		// errors: "pattern" e "email"
	});

	public onLogin() {
		if (this.loginForm.invalid) {
			this.loginForm.markAllAsTouched();
			return;
		}

		this.isLoading = true;

		this.authService.login(this.loginForm.value).subscribe({
			next: (success) => {
				this.isLoading = false;
				if (success) {
					this.authService.isAuthenticated.next(AuthenticationStatus.authenticated);
					this.router.navigateByUrl('/dashboard/welcome');
				}
			},
			error: (error: HttpErrorResponse) => {
				this.messageService.add({
					severity: 'error',
					summary: 'Ups',
					detail: `${error}`,
				});
				this.authService.isAuthenticated.next(AuthenticationStatus.notAuthenticated);
				this.isLoading = false;
			},
		});
	}

	public onChekBoxChange(event: CheckboxChangeEvent) {
		const isChecked = this.loginForm.get('isChecked')?.value;

		if (this.loginForm.valid && event.checked) {
			const { email, password } = this.loginForm.value;

			const encryptedPass = encrypt(password);

			const creds = {
				email,
				password: encryptedPass,
			};

			localStorage.setItem('creds', JSON.stringify(creds));
		}

		if (isChecked === false) localStorage.removeItem('creds');
	}
}
