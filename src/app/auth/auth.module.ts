import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MessageService } from 'primeng/api';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PrimeNgModule } from '../primeNg/prime-ng.module';

@NgModule({
	declarations: [LayoutComponent, LoginPageComponent],
	imports: [CommonModule, AuthRoutingModule, PrimeNgModule, ReactiveFormsModule],
	providers: [MessageService],
})
export class AuthModule {}
