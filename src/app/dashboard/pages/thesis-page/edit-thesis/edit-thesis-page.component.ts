import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

import { IThesis } from 'src/app/dashboard/interfaces/thesis.interface';
import { ThesisService } from 'src/app/dashboard/services/thesis.service';
import { UtilitiesService } from 'src/app/dashboard/services/utilities.service';

@Component({
	selector: 'dashboard-edit-thesis-page',
	templateUrl: 'edit-thesis-page.component.html',
})
export class EditThesisPageComponent implements OnInit {
	ngOnInit(): void {
		this.thesisService.getThesis().subscribe((data) => (this.thesisList = data));
		this.utilitiesService.setVisibility(false);
	}

	public thesisList: IThesis[] = [];
	public thesis!: IThesis;

	constructor(
		private confirmationService: ConfirmationService,
		private messageService: MessageService,
		private thesisService: ThesisService,
		private utilitiesService: UtilitiesService
	) {}

	edit(thesis: IThesis) {
		this.utilitiesService.setVisibility(true);
		this.thesis = thesis;
	}

	delete(thesis: IThesis) {
		this.confirmationService.confirm({
			message: '¿Estás seguro de eliminar: ' + thesis.title + '?',
			header: 'Confirmar acción',
			icon: 'pi pi-exclamation-triangle',
			accept: () => {
				this.thesisService.deleteThesis(thesis.id!).subscribe({
					next: () => {
						this.messageService.add({
							severity: 'success',
							summary: 'Éxito',
							detail: 'Libro eliminado',
							life: 3000,
						});
						this.thesisList = this.thesisList.filter((val) => val.id !== thesis.id);
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

	public updateThesis(thesis: IThesis[]): void {
		this.thesisList = thesis;
	}

	@ViewChild('dt') dt!: Table;
	public applyFilterGlobal($event: any, stringVal: string) {
		this.utilitiesService.filtering($event, stringVal, this.dt);
	}
}
