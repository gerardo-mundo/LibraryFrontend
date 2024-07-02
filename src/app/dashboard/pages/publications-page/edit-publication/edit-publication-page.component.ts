import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

import { IPublication } from 'src/app/dashboard/interfaces/publication.interface';
import { PublicationsService } from 'src/app/dashboard/services/publications.service';
import { UtilitiesService } from 'src/app/dashboard/services/utilities.service';

@Component({
	selector: 'dashboard-edit-publication-page',
	templateUrl: './edit-publication-page.component.html',
	styles: [],
})
export class EditPublicationPageComponent implements OnInit {
	ngOnInit(): void {
		this.publicationService.getPublications().subscribe((data) => (this.publicationList = data));
		this.utilitiesService.setVisibility(false);
	}

	public publicationList: IPublication[] = [];
	public publication!: IPublication;

	constructor(
		private confirmationService: ConfirmationService,
		private messageService: MessageService,
		private publicationService: PublicationsService,
		private utilitiesService: UtilitiesService
	) {}

	edit(publication: IPublication) {
		this.utilitiesService.setVisibility(true);
		this.publication = publication;
	}

	delete(publication: IPublication) {
		this.confirmationService.confirm({
			message: '¿Estás seguro de eliminar: ' + publication.title + '?',
			header: 'Confirmar acción',
			icon: 'pi pi-exclamation-triangle',
			accept: () => {
				this.publicationService.deletePublication(publication.id!).subscribe({
					next: () => {
						this.messageService.add({
							severity: 'success',
							summary: 'Éxito',
							detail: 'Publicación eliminada',
							life: 3000,
						});
						this.publicationList = this.publicationList.filter((val) => val.id !== publication.id);
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

	public updatePublication(publication: IPublication[]): void {
		this.publicationList = publication;
	}

	@ViewChild('dt') dt!: Table;
	public applyFilterGlobal($event: any, stringVal: string) {
		this.utilitiesService.filtering($event, stringVal, this.dt);
	}
}
