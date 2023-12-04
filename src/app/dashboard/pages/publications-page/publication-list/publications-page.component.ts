import { Component, OnInit } from '@angular/core';
import { IPublication } from 'src/app/dashboard/interfaces/publication.interface';

@Component({
  selector: 'app-publications-page',
  templateUrl: './publications-page.component.html',
  styles: [
  ]
})
export class PublicationsPageComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public publications: IPublication[] = [];

}
