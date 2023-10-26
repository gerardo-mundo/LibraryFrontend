import { Component, Input } from '@angular/core';

@Component({
  selector: 'dashboard-add-button',
  template: `
    <div class="mt-4 w-full">
      <button
        type="submit"
        pButton
        pRipple
        class="sm:w-2 w-full justify-content-center"
      >
        <ng-container *ngIf="isLoading; else noLoading">
          <i class="pi pi-spin pi-spinner" style="font-size: 1.4rem"></i>
        </ng-container>
        <ng-template #noLoading>
          <span class="mr-2 font-medium">Agregar</span>
          <i class="pi pi-save"></i>
        </ng-template>
      </button>
    </div>
  `,
  styles: [],
})
export class AddButtonComponent {
  @Input() isLoading!: boolean;
}
