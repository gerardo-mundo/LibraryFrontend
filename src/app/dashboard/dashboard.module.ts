import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ConfirmationService, MessageService } from 'primeng/api';
import { PrimeNgModule } from '../primeNg/prime-ng.module';

import { AddButtonComponent } from './components/add-button/add-button.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SharedModule } from '../shared/shared.module';
import { ThesisService } from './services/thesis.service';
import { UtilitiesService } from './services/utilities.service';
import { ZeroDatePipe } from './pipes/zeroDate.pipe';   

import { NewAccountPageComponent, ChangePasswordPageComponent, RegisteredAccountsPageComponent } from './pages/accounts-page';
import { BooksPageComponent, AddBookPageComponent, EditBookPageComponent, ModalDialogComponent } from './pages/books-page';
import { LoansPageComponent, NewLoanPageComponent } from './pages/loans-page';
import { AddPublicationPageComponent, EditPublicationPageComponent, ModalPublicationComponent, 
  PublicationsPageComponent } from './pages/publications-page';
import { RegisterPageComponent, RegisteredAdministrativesPageComponent, RegisteredProfessorsPageComponent,
RegisteredStudentsPageComponent } from './pages/register-page';
import { AddThesisPageComponent, EditThesisPageComponent, ModalThesisComponent, ThesisPageComponent } from './pages/thesis-page';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

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
    ZeroDatePipe,
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
