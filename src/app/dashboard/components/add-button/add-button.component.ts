import { Component, Input } from '@angular/core';

@Component({
  selector: 'dashboard-add-button',
  template: `
      <button
        type="submit"
        pButton
        pRipple
        [disabled]="invalid"
        [loading]="isLoading"
        class="sm:w-max w-full justify-content-center mt-4"
      >
        <span class="mr-2 font-medium">{{label ?? 'Agregar'}}</span>
        <i class="pi pi-save"></i>
      </button>
  `,
  styles: [],
})
export class AddButtonComponent {
  @Input() isLoading!: boolean;
  @Input() invalid!: boolean;
  @Input() label?: string;
}
