import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';

// eslint-disable-next-line import/order
import { MessageService } from 'primeng/api';
import { PrimeNgModule } from '../primeNg/prime-ng.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [HomePageComponent],
	imports: [CommonModule, HomeRoutingModule, PrimeNgModule, SharedModule],
	providers: [MessageService],
})
export class HomeModule {}
