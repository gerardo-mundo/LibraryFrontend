import { Component } from '@angular/core';
import { IUser } from 'src/app/dashboard/interfaces/user.interface';
import { UsersService } from 'src/app/dashboard/services/users.service';

@Component({
	selector: 'app-registered-professors-page',
	templateUrl: './registered-professors-page.component.html',
	styles: [],
})
export class RegisteredProfessorsPageComponent {
	constructor(private usersService: UsersService) {}

	ngOnInit(): void {
		this.getProfessorsList();
	}

	public professors!: IUser[];

	public getProfessorsList() {
		this.usersService.getProfessors().subscribe((profs) => (this.professors = profs));
	}
}
