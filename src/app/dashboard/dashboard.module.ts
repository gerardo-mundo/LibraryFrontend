import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { BooksPageComponent } from './pages/books-page/books-page.component';
import { ThesisPageComponent } from './pages/thesis-page/thesis-page.component';
import { PublicationsPageComponent } from './pages/publications-page/publications-page.component';
import { LoansPageComponent } from './pages/loans-page/loans-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { SharedModule } from '../shared/shared.module';
import { PrimeNgModule } from '../primeNg/prime-ng.module';

@NgModule({
  declarations: [
    LayoutComponent,
    BooksPageComponent,
    ThesisPageComponent,
    PublicationsPageComponent,
    LoansPageComponent,
    RegisterPageComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule, PrimeNgModule],
})
export class DashboardModule {}
