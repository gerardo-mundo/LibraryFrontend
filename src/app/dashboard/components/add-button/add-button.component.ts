import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-add-button',
  template: `
    <div class="mt-4 w-full">
      <button
        type="submit"
        pButton
        pRipple
        class="sm:w-auto w-full justify-content-center"
      >
        <span class="mr-2 font-medium">Agregar</span>
        <i class="pi pi-save"></i>
      </button>
    </div>
  `,
  styles: [],
})
export class AddButtonComponent {}
