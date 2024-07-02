import { Component, OnInit } from '@angular/core';

import { IUser } from 'src/app/dashboard/interfaces/user.interface';
import { UsersService } from 'src/app/dashboard/services/users.service';

@Component({
	selector: 'app-registered-students-page',
	templateUrl: './registered-students-page.component.html',
	styles: [],
})
export class RegisteredStudentsPageComponent implements OnInit {
	constructor(private usersService: UsersService) {}

	ngOnInit(): void {
		this.getStudentsList();
	}

	public students!: IUser[];
	public professors!: IUser[];
	public administratives!: IUser[];

	public getStudentsList() {
		this.usersService.getStudents().subscribe((students) => (this.students = students));
	}
}
