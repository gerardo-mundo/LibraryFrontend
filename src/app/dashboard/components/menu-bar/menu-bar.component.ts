import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { UserDataToken } from 'src/app/auth/interfaces/login.interface';
import { AuthenticationService } from 'src/app/auth/services/Authentication.service';

@Component({
	selector: 'dashboard-menu-bar',
	templateUrl: './menu-bar.component.html',
	styles: [],
})
export class MenuBarComponent implements OnInit {
	items: MenuItem[] | undefined;
	accountOptions: MenuItem[] | undefined;
	public userAccount: UserDataToken = this.authService.getUserDataToken();
	private firstLetter!: string;
	private firstLetterLN!: string;
	public fullName!: string;
	public initials!: string;

	ngOnInit(): void {
		this.firstLetter = this.userAccount?.name.charAt(0);
		this.firstLetterLN = this.userAccount?.lastName.charAt(0);
		this.initials = this.firstLetter + this.firstLetterLN;
		this.fullName = this.userAccount.name + ' ' + this.userAccount.lastName;

		this.accountOptions = [
			{
				label: 'Opciones',
				items: [
					{
						label: 'Cambiar contraseña',
						icon: PrimeIcons.USER_EDIT,
						routerLink: 'change-password',
					},
					{
						label: 'Cerrar sesión',
						icon: PrimeIcons.SIGN_OUT,
						routerLink: '/auth/login',
						command: () => this.authService.logout(),
					},
				],
			},
		];

		this.items = [
			{
				label: 'Libros',
				icon: PrimeIcons.BOOK,
				items: [
					{
						label: 'Lista',
						icon: PrimeIcons.LIST,
						routerLink: 'books',
					},
					{
						label: 'Agregar',
						icon: PrimeIcons.PLUS,
						routerLink: 'add-book',
					},

					{
						label: 'Editar',
						icon: PrimeIcons.FILE_EDIT,
						routerLink: 'edit-book',
					},
				],
			},
			{
				label: 'Tesis',
				icon: PrimeIcons.BOOKMARK,
				items: [
					{
						label: 'Lista',
						icon: PrimeIcons.LIST,
						routerLink: 'thesis',
					},
					{
						label: 'Agregar',
						icon: PrimeIcons.PLUS,
						routerLink: 'add-thesis',
					},
					{
						label: 'Editar',
						icon: PrimeIcons.FILE_EDIT,
						routerLink: 'edit-thesis',
					},
				],
			},
			{
				label: 'Publicaciones',
				icon: PrimeIcons.BOOKMARK_FILL,
				items: [
					{
						label: 'Lista',
						icon: PrimeIcons.LIST,
						routerLink: 'publications',
					},
					{
						label: 'Agregar',
						icon: PrimeIcons.PLUS,
						routerLink: 'add-publication',
					},
					{
						label: 'Editar',
						icon: PrimeIcons.FILE_EDIT,
						routerLink: 'edit-publication',
					},
				],
			},
			{
				label: 'Préstamos',
				icon: PrimeIcons.CLONE,
				items: [
					{
						label: 'Registrar nuevo',
						icon: PrimeIcons.PLUS,
						routerLink: 'new-loan',
					},
					{
						label: 'Ver registros',
						icon: PrimeIcons.EYE,
						routerLink: 'loans',
					},
				],
			},
			{
				label: 'Registrar usuarios',
				icon: PrimeIcons.USER_PLUS,
				items: [
					{
						label: 'Nuevo usuario',
						icon: PrimeIcons.PLUS,
						routerLink: 'register-user',
					},
					{
						label: 'Usuarios registrados',
						icon: PrimeIcons.USERS,
						items: [
							{
								label: 'Estudiantes',
								routerLink: 'registered-students',
							},
							{
								label: 'Maestros',
								routerLink: 'registered-professors',
							},
							{
								label: 'Administrativos',
								routerLink: 'registered-administratives',
							},
						],
					},
				],
			},
			{
				label: 'Cuentas',
				icon: PrimeIcons.USER,
				visible: this.userAccount?.isAdmin === 'true',
				items: [
					{
						label: 'Registrar nueva cuenta',
						icon: PrimeIcons.ID_CARD,
						routerLink: 'new-account',
					},
					{
						label: 'Cuentas registrados',
						icon: PrimeIcons.DATABASE,
						routerLink: 'registered-accounts',
					},
				],
			},
		];
	}

	constructor(private authService: AuthenticationService) {}

	public stringToColor(string: string): string {
		let hash = 0;
		let i;

		for (i = 0; i < string.length; i += 1) {
			hash = string.charCodeAt(i) + ((hash << 5) - hash);
		}

		let color = '#';

		for (i = 0; i < 3; i += 1) {
			const value = (hash >> (i * 8)) & 0xff;
			color += `00${value.toString(16)}`.slice(-2);
		}
		return color;
	}
}
