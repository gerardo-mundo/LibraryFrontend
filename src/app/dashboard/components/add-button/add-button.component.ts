import { Component, Input } from '@angular/core';

@Component({
  selector: 'dashboard-add-button',
  template: `
      <button
        type="submit"
        pButton
        pRipple
        [disabled]="invalid"
        class="sm:w-auto w-full justify-content-center mt-4"
      >
        <ng-container *ngIf="isLoading; else noLoading">
          <i class="pi pi-spin pi-spinner" style="font-size: 1.4rem"></i>
        </ng-container>
        <ng-template #noLoading>
          <span class="mr-2 font-medium">{{label ?? 'Agregar'}}</span>
          <i class="pi pi-save"></i>
        </ng-template>
      </button>
  `,
  styles: [],
})
export class AddButtonComponent {
  @Input() isLoading!: boolean;
  @Input() invalid!: boolean;
  @Input() label?: string;
}
