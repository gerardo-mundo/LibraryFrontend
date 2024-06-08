import { Component, OnInit } from '@angular/core';
import { IEmployeeData, IUser } from '../../interfaces/user.interface';
import { AccountsService } from '../../services/accounts.service';
import { UsersService } from '../../services/users.service';

@Component({
	selector: 'app-welcome-page',
	templateUrl: './welcome-page.component.html',
	styles: [],
})
export class WelcomePageComponent implements OnInit {
	constructor(
		private accountsService: AccountsService,
		private usersService: UsersService
	) {}

	ngOnInit(): void {
		this.accountsService.getAccountsList().subscribe((accountsList) => (this.accounts = accountsList));
		this.usersService.getAllUsers().subscribe((usersList) => (this.users = usersList));
	}

	public accounts: IEmployeeData[] = [];
	public date = new Date();
	public users: IUser[] = [];
}
