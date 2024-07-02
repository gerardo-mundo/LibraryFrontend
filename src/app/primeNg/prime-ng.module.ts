import { NgModule } from '@angular/core';

import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { FieldsetModule } from 'primeng/fieldset';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MultiSelectModule } from 'primeng/multiselect';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
	imports: [],
	exports: [
		AvatarModule,
		ButtonModule,
		CardModule,
		ConfirmDialogModule,
		CheckboxModule,
		DialogModule,
		FieldsetModule,
		InputNumberModule,
		InputTextModule,
		InputSwitchModule,
		MenubarModule,
		MultiSelectModule,
		PanelModule,
		MenuModule,
		PasswordModule,
		SelectButtonModule,
		TableModule,
		TagModule,
		ToastModule,
		ToolbarModule,
	],
})
export class PrimeNgModule {}
