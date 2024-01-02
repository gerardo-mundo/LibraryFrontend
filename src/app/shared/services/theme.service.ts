import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService{
  public themeSelection!: boolean;


  constructor(@Inject(DOCUMENT) private document: Document) {
    const theme = localStorage.getItem('theme');

    if (theme) {
      this.themeSelection = theme === 'dark' ? true : false;
    }

    this.switchTheme(this.themeSelection);
  }

  switchTheme(state: boolean): void {
    const theme = state ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    const themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;

    //themeLink.href = `lara-${theme}-indigo.css`;
    themeLink.href = `lara-${theme}-indigo.css`;
  }
}
