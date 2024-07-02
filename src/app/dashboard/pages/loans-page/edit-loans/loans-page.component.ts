import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

import { ILoanWithBooks } from '../../../interfaces/loan.interface';
import { LoansService } from '../../../services/loans.service';
import { UtilitiesService } from '../../../services/utilities.service';

@Component({
	selector: 'app-loans-page',
	templateUrl: './loans-page.component.html',
	styles: [],
})
export class LoansPageComponent implements OnInit {
	constructor(
		private utilitiesService: UtilitiesService,
		private loansService: LoansService,
		private messageService: MessageService,
		private confirmationService: ConfirmationService
	) {}

	ngOnInit(): void {
		this.loansService.getBorrowedBooks().subscribe((loans: ILoanWithBooks[]) => (this.loans = loans));
		this.utilitiesService.setVisibility(false);
	}

	public loans: ILoanWithBooks[] = [];
	public loan!: ILoanWithBooks;

	public onUpdateLoan(id: number) {
		this.confirmationService.confirm({
			message: '¿Estás deguro de finalizar el préstamo?',
			header: 'Confirmar acción',
			icon: 'pi pi-check-circle',
			accept: () => {
				this.loansService.updateLoan(id).subscribe({
					next: () => {
						this.messageService.add({
							severity: 'success',
							summary: 'Éxito',
							detail: 'Se actualizó la información',
							life: 3000,
						});
						this.loansService.getBorrowedBooks().subscribe((loans: ILoanWithBooks[]) => (this.loans = loans));
					},
					error: (resp: HttpErrorResponse) => {
						this.messageService.add({
							severity: 'error',
							summary: 'Error',
							detail: `${resp}`,
							life: 3000,
						});
					},
				});
			},
		});
	}

	public onDeleteLoan(id: number) {
		this.confirmationService.confirm({
			message: '¿Estás deguro de eliminar este registro?',
			header: 'Confirmar acción',
			icon: 'pi pi-exclamation-triangle',
			accept: () => {
				this.loansService.deleteLoan(id).subscribe({
					next: () => {
						this.messageService.add({
							severity: 'success',
							summary: 'Éxito',
							detail: 'Se eliminó el registro',
							life: 3000,
						});
					},
					error: (resp: HttpErrorResponse) => {
						this.messageService.add({
							severity: 'error',
							summary: 'Error',
							detail: `${resp}`,
							life: 3000,
						});
					},
				});
			},
		});
	}

	public getSeverity(status: boolean): string {
		switch (status) {
			case true:
				return 'success';
			case false:
				return 'danger';
		}
	}

	@ViewChild('dt') dt!: Table;
	public applyFilterGlobal($event: any, stringVal: string) {
		this.utilitiesService.filtering($event, stringVal, this.dt);
	}
}
