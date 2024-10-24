import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
	declarations: [HomePageComponent],
	imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
