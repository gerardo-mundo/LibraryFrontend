import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
// eslint-disable-next-line import/order
import { PrimeNgModule } from '../primeNg/prime-ng.module';

@NgModule({
	declarations: [HomePageComponent],
	imports: [CommonModule, HomeRoutingModule, PrimeNgModule],
})
export class HomeModule {}
