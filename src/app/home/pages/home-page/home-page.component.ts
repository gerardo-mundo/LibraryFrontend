import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';

import { PexelImage } from '../../interfaces/pexel-image-response';
import { HomeImagesService } from '../../services/home-images.service';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
	ngOnInit(): void {
		this.homeImagesService.getHeroHomePhoto().subscribe((img) => (this.heroImg = img));
	}

	constructor(
		private homeImagesService: HomeImagesService,
		private messageService: MessageService
	) {}

	items = [];
	public date = new Date();
	public heroImg: PexelImage | null = null;

	public displayMessage() {
		this.messageService.add({
			key: 'inf',
			severity: 'info',
			summary: 'Atención...',
			detail: 'Está funcionalidad estará activa muy pronto',
		});
	}
}
