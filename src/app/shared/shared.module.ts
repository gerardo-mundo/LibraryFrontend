import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

import { PrimeNgModule } from '../primeNg/prime-ng.module';
import { ThemingButtonComponent } from './components/theming-button/theming-button.component';
@NgModule({
	declarations: [NotFoundPageComponent, ThemingButtonComponent],
	imports: [CommonModule, PrimeNgModule, FormsModule],
	exports: [NotFoundPageComponent, ThemingButtonComponent],
})
export class SharedModule {}
