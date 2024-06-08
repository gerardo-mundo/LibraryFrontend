import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PrimeNgModule } from '../primeNg/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';

@NgModule({
	declarations: [LayoutComponent, LoginPageComponent],
	imports: [CommonModule, AuthRoutingModule, PrimeNgModule, ReactiveFormsModule],
	providers: [MessageService],
})
export class AuthModule {}
