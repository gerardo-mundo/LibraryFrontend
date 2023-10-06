import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { BooksPageComponent } from './pages/books-page/books-page.component';
import { ThesisPageComponent } from './pages/thesis-page/thesis-page.component';
import { PublicationsPageComponent } from './pages/publications-page/publications-page.component';
import { LoansPageComponent } from './pages/loans-page/loans-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'books', component: BooksPageComponent },
      { path: 'thesis', component: ThesisPageComponent },
      { path: 'publications', component: PublicationsPageComponent },
      { path: 'loans', component: LoansPageComponent },
      { path: 'register', component: RegisterPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
