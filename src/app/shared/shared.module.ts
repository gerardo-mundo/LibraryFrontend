import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ThemingButtonComponent } from './components/theming-button/theming-button.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { PrimeNgModule } from '../primeNg/prime-ng.module';
@NgModule({
	declarations: [NotFoundPageComponent, ThemingButtonComponent],
	imports: [CommonModule, PrimeNgModule, FormsModule],
	exports: [NotFoundPageComponent, ThemingButtonComponent],
})
export class SharedModule {}
