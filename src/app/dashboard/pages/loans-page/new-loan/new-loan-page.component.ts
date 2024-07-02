import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';
import { MultiSelectChangeEvent } from 'primeng/multiselect';
import { SelectButtonOptionClickEvent } from 'primeng/selectbutton';

import { throwError } from 'rxjs';

import { IBook } from '../../../interfaces/book.interface';
import { IUser } from '../../../interfaces/user.interface';
import { BooksService } from '../../../services/books.service';
import { LoansService } from '../../../services/loans.service';
import { UsersService } from '../../../services/users.service';

@Component({
	selector: 'app-new-loan-page',
	templateUrl: './new-loan-page.component.html',
	styles: [],
})
export class NewLoanPageComponent implements OnInit {
	constructor(
		private fb: FormBuilder,
		private booksService: BooksService,
		private usersService: UsersService,
		private loansService: LoansService,
		private messageService: MessageService
	) {}

	ngOnInit(): void {
		this.booksService.getBooks().subscribe((books) => (this.books = books));
	}

	public isStudent: boolean | null = null;
	public isEmployee: boolean | null = null;

	public loanForm: FormGroup = this.fb.group({
		type: [null, [Validators.required]],
		selectedUser: [{ value: null, disabled: true }, [Validators.required]],
		selectedBooks: [{ value: null, disabled: true }, [Validators.required, Validators.minLength(1)]],
	});

	public user: IUser[] = [];
	public books: IBook[] = [];
	public loading = false;

	public userTypes = [
		{ name: 'Estudiante', value: 1 },
		{ name: 'Maestro', value: 2 },
	];
	private lastOptionSelected!: SelectButtonOptionClickEvent;

	public selectedOption(event: SelectButtonOptionClickEvent) {
		this.lastOptionSelected = event;
		this.isStudent = this.lastOptionSelected?.option?.value === 1;
		this.isEmployee = this.lastOptionSelected?.option?.value === 2;

		if (this.isStudent) {
			this.usersService.getStudents().subscribe((student) => {
				this.user = student;
				this.loanForm.get('selectedUser')?.enable();
			});
		} else {
			this.usersService.getProfessors().subscribe((prof) => {
				this.user = prof;
				this.loanForm.get('selectedUser')?.enable();
			});
		}

		this.loanForm.updateValueAndValidity();
	}

	public selectedBooks(event: MultiSelectChangeEvent) {
		console.log(event.value.length);

		if (event?.value.length > 0) this.loanForm.get('selectedBooks')?.enable();

		this.loanForm.updateValueAndValidity();
	}

	public onNewLoan() {
		const { selectedUser, selectedBooks } = this.loanForm.value;
		const userId = selectedUser[0].id;
		const borrowedBooks = selectedBooks.map((book: IBook) => book.adquisition);
		const data = {
			userId,
			borrowedBooks,
		};

		if (selectedUser == null || selectedBooks == null) throwError(() => 'Los valores no pueden ser nulos');

		this.loading = true;

		this.loansService.postLoan(data).subscribe({
			next: () => {
				this.messageService.add({
					summary: 'Éxito',
					severity: 'success',
					detail: 'Préstamo registrado',
				});

				this.loading = false;
			},
			error: (error) => {
				this.messageService.add({
					summary: 'Error',
					severity: 'error',
					detail: `${error}`,
				});

				this.loading = false;
			},
		});
	}
}
