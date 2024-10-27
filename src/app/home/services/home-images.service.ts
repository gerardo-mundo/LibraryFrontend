import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { PexelImage } from '../interfaces/pexel-image-response';

import { ENVIRONMENT } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class HomeImagesService {
	constructor(private http: HttpClient) {}

	private readonly PEXELS_API_KEY = ENVIRONMENT.PEXELS_API_KEY;
	private readonly PEXELS_URL = 'https://api.pexels.com/v1/photos/2041540';

	public getHeroHomePhoto(): Observable<PexelImage> {
		const headers = new HttpHeaders({
			Authorization: this.PEXELS_API_KEY,
		});

		return this.http.get<PexelImage>(this.PEXELS_URL, { headers });
	}
}
