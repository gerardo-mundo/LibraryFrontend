import { Component, OnInit } from '@angular/core';

import { IcardWelcomePage } from '../../interfaces/cardWelcomePage.interface';
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
	public cardsList: IcardWelcomePage[] = [
		{
			icon: 'pi pi-desktop',
			title: 'Gestiona',
			description: 'Desde cualquier dispositivo y lugar',
		},
		{
			icon: 'pi pi-shield',
			title: 'Seguridad',
			description: 'Tus datos e información siempre estarán a salvo',
		},
		{
			icon: 'pi pi-thumbs-up',
			title: 'Fácil de usar',
			description: 'El diseño intuitivo permite crear y gestionar registros fácilmente',
		},
		{
			icon: 'pi pi-globe',
			title: 'Acceso global',
			description: 'Sólo necesitas un dispositivo conectado a internet',
		},
		{
			icon: 'pi pi-database',
			title: 'Sin pérdida de datos',
			description: 'Toda tu información resguarda en la nube',
		},
	];
}
