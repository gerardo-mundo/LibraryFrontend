import { Component, OnInit } from '@angular/core';

import { IPublication } from 'src/app/dashboard/interfaces/publication.interface';
import { PublicationsService } from 'src/app/dashboard/services/publications.service';

@Component({
	selector: 'app-publications-page',
	templateUrl: './publications-page.component.html',
	styles: [],
})
export class PublicationsPageComponent implements OnInit {
	ngOnInit(): void {
		this.getPublications();
	}

	constructor(private publicationService: PublicationsService) {}

	public publications: IPublication[] = [];

	public getPublications(): void {
		this.publicationService.getPublications().subscribe((publicationsList) => (this.publications = publicationsList));
	}
}
