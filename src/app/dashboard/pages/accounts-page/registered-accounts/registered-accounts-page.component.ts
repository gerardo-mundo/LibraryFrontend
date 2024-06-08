import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UserDataToken } from 'src/app/auth/interfaces/login.interface';
import { AuthenticationService } from 'src/app/auth/services/Authentication.service';
import { IEmployeeData } from 'src/app/dashboard/interfaces/user.interface';
import { AccountsService } from 'src/app/dashboard/services/accounts.service';

@Component({
	selector: 'app-registered-accounts-page',
	templateUrl: './registered-accounts-page.component.html',
	styles: [],
})
export class RegisteredAccountsPageComponent implements OnInit {
	constructor(
		private accountsService: AccountsService,
		private messageService: MessageService,
		private authService: AuthenticationService
	) {}

	ngOnInit(): void {
		this.getAccounts();
	}

	public accounts: IEmployeeData[] = [];
	public userAccount: UserDataToken = this.authService.getUserDataToken();
	public isLoading = false;

	private getAccounts(): void {
		this.accountsService.getAccountsList().subscribe((accounts) => (this.accounts = accounts));
	}

	public onMakeAdmin(email: string) {
		this.isLoading = true;
		this.accountsService.makeAdminAccount(email).subscribe({
			next: () => {
				this.messageService.add({
					severity: 'success',
					summary: 'Éxito',
					detail: `${email} ahora es administrador`,
				});
				this.isLoading = false;
			},
			error: (err) => {
				this.messageService.add({
					severity: 'error',
					summary: 'Ups',
					detail: `${err.text}`,
				});
				this.isLoading = false;
			},
		});
	}

	public onRemoveAdmin(email: string) {
		this.isLoading = true;
		this.accountsService.removeAdminAccount(email).subscribe({
			next: () => {
				this.messageService.add({
					severity: 'success',
					summary: 'Éxito',
					detail: `${email} ya no es administrador`,
				});
				this.isLoading = false;
			},
			error: (err) => {
				this.messageService.add({
					severity: 'error',
					summary: 'Ups',
					detail: `${err?.text}`,
				});
				console.log(err);
				this.isLoading = false;
			},
		});
	}
}
