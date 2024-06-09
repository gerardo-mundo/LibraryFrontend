import { Component, OnInit } from '@angular/core';

import { IUser } from 'src/app/dashboard/interfaces/user.interface';
import { UsersService } from 'src/app/dashboard/services/users.service';

@Component({
	selector: 'app-registered-administratives-page',
	templateUrl: './registered-administratives-page.component.html',
	styles: [],
})
export class RegisteredAdministrativesPageComponent implements OnInit {
	constructor(private usersService: UsersService) {}

	ngOnInit(): void {
		this.getAdministrativesList();
	}

	public administratives!: IUser[];

	public getAdministrativesList() {
		this.usersService.getAdministratives().subscribe((adms) => (this.administratives = adms));
	}
}
