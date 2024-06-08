import { Component, OnInit } from '@angular/core';
import { IThesis } from 'src/app/dashboard/interfaces/thesis.interface';
import { ThesisService } from 'src/app/dashboard/services/thesis.service';

@Component({
	selector: 'app-thesis-page',
	templateUrl: './thesis-page.component.html',
	styles: [],
})
export class ThesisPageComponent implements OnInit {
	ngOnInit(): void {
		this.thesisService.getThesis().subscribe((data) => (this.thesis = data));
	}

	public thesis: IThesis[] = [];

	constructor(private thesisService: ThesisService) {}
}
