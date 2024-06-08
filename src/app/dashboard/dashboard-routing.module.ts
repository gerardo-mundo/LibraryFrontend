import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import {
	ChangePasswordPageComponent,
	NewAccountPageComponent,
	RegisteredAccountsPageComponent,
} from './pages/accounts-page';
import { AddBookPageComponent, BooksPageComponent, EditBookPageComponent } from './pages/books-page';
import { LoansPageComponent, NewLoanPageComponent } from './pages/loans-page';
import {
	AddPublicationPageComponent,
	EditPublicationPageComponent,
	PublicationsPageComponent,
} from './pages/publications-page';
import {
	RegisterPageComponent,
	RegisteredAdministrativesPageComponent,
	RegisteredProfessorsPageComponent,
	RegisteredStudentsPageComponent,
} from './pages/register-page';
import { AddThesisPageComponent, EditThesisPageComponent, ThesisPageComponent } from './pages/thesis-page';
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
