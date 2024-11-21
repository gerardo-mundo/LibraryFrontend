import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ThemeService {
	private _themeSelection: boolean = false;

	constructor(@Inject(DOCUMENT) private document: Document) {
		this.loadTheme();
	}

	private loadTheme() {
		const theme = localStorage.getItem('theme');
		this._themeSelection = theme === 'dark';
		this.switchTheme(this._themeSelection);
	}

	get themeSelection() {
		return this._themeSelection;
	}

	switchTheme(state: boolean): void {
		this._themeSelection = state;
		const theme = state ? 'dark' : 'light';
		localStorage.setItem('theme', theme);
		const themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

		//themeLink.href = `lara-${theme}-indigo.css`;
		themeLink.href = `lara-${theme}-indigo.css`;
	}
}
