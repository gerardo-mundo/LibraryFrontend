import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ZeroDatePipe } from './pipes/zeroDate.pipe';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { BooksPageComponent } from './pages/books-page/book-list/books-page.component';
import { ThesisPageComponent } from './pages/thesis-page/list-thesis/thesis-page.component';
import { PublicationsPageComponent } from './pages/publications-page/publication-list/publications-page.component';
import { LoansPageComponent } from './pages/loans-page/edit-loans/loans-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { SharedModule } from '../shared/shared.module';
import { PrimeNgModule } from '../primeNg/prime-ng.module';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { AddBookPageComponent } from './pages/books-page/add-book/add-book-page.component';
import { EditBookPageComponent } from './pages/books-page/edit-book/edit-book-page.component';
import { AddThesisPageComponent } from './pages/thesis-page/add-thesis/add-thesis-page.component';
import { EditThesisPageComponent } from './pages/thesis-page/edit-thesis/edit-thesis-page.component';
import { AddPublicationPageComponent } from './pages/publications-page/add-publication/add-publication-page.component';
import { EditPublicationPageComponent } from './pages/publications-page/edit-publication/edit-publication-page.component';
import { NewLoanPageComponent } from './pages/loans-page/new-loan-page.component';
import { DeleteLoanPageComponent } from './pages/loans-page/delete-loan-page.component';
import { RegisteredStudentsPageComponent } from './pages/register-page/registered-students/registered-students-page.component';
import { RegisteredAdministrativesPageComponent } from './pages/register-page/registered-administratives/registered-administratives-page.component';
import { RegisteredProfessorsPageComponent } from './pages/register-page/registered-professors/registered-professors-page.component';
import { NewAccountPageComponent } from './pages/accounts-page/new-account/new-account-page.component';
import { RegisteredAccountsPageComponent } from './pages/accounts-page/registered-accounts/registered-accounts-page.component';
import { ChangePasswordPageComponent } from './pages/accounts-page/change-password/change-password-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UtilitiesService } from './services/utilities.service';
import { ThesisService } from './services/thesis.service';
import { ModalDialogComponent } from './pages/books-page/edit-book/modal-dialog.component.';
import { ModalThesisComponent } from './pages/thesis-page/edit-thesis/modal-thesis.component.';
import { ModalPublicationComponent } from './pages/publications-page/edit-publication/modal-publication.component';

@NgModule({
  providers: [
    ConfirmationService,
    MessageService,
    ThesisService,
    UtilitiesService,
  ],
  declarations: [
    LayoutComponent,
    BooksPageComponent,
    ThesisPageComponent,
    PublicationsPageComponent,
    LoansPageComponent,
    RegisterPageComponent,
    MenuBarComponent,
    AddBookPageComponent,
    EditBookPageComponent,
    AddThesisPageComponent,
    EditThesisPageComponent,
    AddPublicationPageComponent,
    EditPublicationPageComponent,
    NewLoanPageComponent,
    DeleteLoanPageComponent,
    RegisteredStudentsPageComponent,
    RegisteredAdministrativesPageComponent,
    RegisteredProfessorsPageComponent,
    NewAccountPageComponent,
    RegisteredAccountsPageComponent,
    ChangePasswordPageComponent,
    WelcomePageComponent,
    AddButtonComponent,
    ModalDialogComponent,
    ModalThesisComponent,
    ModalPublicationComponent,
    //Pipes
    ZeroDatePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    SharedModule,
    PrimeNgModule,
  ],
})
export class DashboardModule {}
