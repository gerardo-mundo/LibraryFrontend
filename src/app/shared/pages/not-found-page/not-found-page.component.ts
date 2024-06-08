import { Component } from '@angular/core';

@Component({
	selector: 'app-not-found-page',
	template: `
		<div class="bg-primary-reverse h-screen w-screen flex flex-column align-items-center justify-content-center">
			<i class="pi pi-exclamation-triangle" style="font-size: 5rem; color: var(--red-500)"></i>
			<h1 class="text-red-500 uppercase">error <span class="text-4xl font-bold">404</span></h1>
			<h2 class="line-height-3 font-bold">Página o recurso no encontrado</h2>
			<h3 class="line-height-3 font-bold">
				Por favor verifique que la ruta o sus credenciales de acceso sean correctos
			</h3>
			<p-button type="button" routerLink="/dashboard/welcome" styleClass=" p-button-raised"
				>Regresar a la página de inicio</p-button
			>
		</div>
	`,
	styles: [],
})
export class NotFoundPageComponent {}
