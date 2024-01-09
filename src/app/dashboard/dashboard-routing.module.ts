import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { BooksPageComponent } from './pages/books-page/book-list/books-page.component';
import { ThesisPageComponent } from './pages/thesis-page/list-thesis/thesis-page.component';
import { PublicationsPageComponent } from './pages/publications-page/publication-list/publications-page.component';
import { LoansPageComponent } from './pages/loans-page/loans-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AddBookPageComponent } from './pages/books-page/add-book/add-book-page.component';
import { EditBookPageComponent } from './pages/books-page/edit-book/edit-book-page.component';
import { AddThesisPageComponent } from './pages/thesis-page/add-thesis/add-thesis-page.component';
import { EditThesisPageComponent } from './pages/thesis-page/edit-thesis/edit-thesis-page.component';
import { AddPublicationPageComponent } from './pages/publications-page/add-publication/add-publication-page.component';
import { EditPublicationPageComponent } from './pages/publications-page/edit-publication/edit-publication-page.component';
import { NewLoanPageComponent } from './pages/loans-page/new-loan-page.component';
import { DeleteLoanPageComponent } from './pages/loans-page/delete-loan-page.component';
import { RegisteredStudentsPageComponent } from './pages/register-page/registered-students/registered-students-page.component';
import { RegisteredProfessorsPageComponent } from './pages/register-page/registered-professors/registered-professors-page.component';
import { RegisteredAdministrativesPageComponent } from './pages/register-page/registered-administratives/registered-administratives-page.component';
import { NewAccountPageComponent } from './pages/accounts-page/new-account/new-account-page.component';
import { RegisteredAccountsPageComponent } from './pages/accounts-page/registered-accounts/registered-accounts-page.component';
import { ChangePasswordPageComponent } from './pages/accounts-page/change-password/change-password-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'books', component: BooksPageComponent },
      { path: 'add-book', component: AddBookPageComponent },
      { path: 'edit-book', component: EditBookPageComponent },
      { path: 'thesis', component: ThesisPageComponent },
      { path: 'add-thesis', component: AddThesisPageComponent },
      { path: 'edit-thesis', component: EditThesisPageComponent },
      { path: 'publications', component: PublicationsPageComponent },
      { path: 'add-publication', component: AddPublicationPageComponent },
      { path: 'edit-publication', component: EditPublicationPageComponent },
      { path: 'loans', component: LoansPageComponent },
      { path: 'new-loan', component: NewLoanPageComponent },
      { path: 'delete-loan', component: DeleteLoanPageComponent },
      { path: 'register-user', component: RegisterPageComponent },
      {
        path: 'registered-students',
        component: RegisteredStudentsPageComponent,
      },
      {
        path: 'registered-professors',
        component: RegisteredProfessorsPageComponent,
      },
      {
        path: 'registered-administratives',
        component: RegisteredAdministrativesPageComponent,
      },
      { path: 'new-account', component: NewAccountPageComponent },
      {
        path: 'registered-accounts',
        component: RegisteredAccountsPageComponent,
      },
      { path: 'change-password', component: ChangePasswordPageComponent },
      { path: 'welcome', component: WelcomePageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
