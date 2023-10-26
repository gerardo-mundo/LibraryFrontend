import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'dashboard-menu-bar',
  templateUrl: './menu-bar.component.html',
  styles: [],
})
export class MenuBarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
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
          {
            label: 'Borrar',
            icon: PrimeIcons.ERASER,
            routerLink: 'delete-thesis',
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
          {
            label: 'Borrar',
            icon: PrimeIcons.ERASER,
            routerLink: 'delete-publication',
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
          {
            label: 'Borrar',
            icon: PrimeIcons.ERASER,
            routerLink: 'delete-loan',
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
          {
            label: 'Cambiar contraseña',
            icon: PrimeIcons.USER_EDIT,
            routerLink: 'change-password',
          },
          {
            label: 'Cerrar sesión',
            icon: PrimeIcons.SIGN_OUT,
            routerLink: '/auth/login',
            command: () => console.log('cerrar sesión'),
          },
        ],
      },
    ];
  }
}
