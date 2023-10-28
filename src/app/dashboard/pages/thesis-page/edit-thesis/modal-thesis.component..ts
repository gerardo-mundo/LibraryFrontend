import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { MessageService } from 'primeng/api';

import * as customValidators from '../../../../shared/helpers/validators';
import { UtilitiesService } from 'src/app/dashboard/services/utilities.service';
import { IThesis } from 'src/app/dashboard/interfaces/thesis.interface';
import { ThesisService } from 'src/app/dashboard/services/thesis.service';

@Component({
  selector: 'modal-thesis-dashboard',
  template: `
    <p-dialog
      [(visible)]="isVisible"
      [style]="{ width: '450px' }"
      header="Editar libro"
      [modal]="true"
      styleClass="p-fluid"
    >
      <ng-template pTemplate="content">
        <form [formGroup]="form">
          <div class="field">
            <label for="title">Título</label>
            <input
              formControlName="title"
              type="text"
              pInputText
              id="title"
              required
            />
            <small *ngIf="isValidField('title')" class="ml-2 text-red-500">{{
              displayError('title')
            }}</small>
          </div>
          <div class="field">
            <label for="authorOne">Autor</label>
            <input
              formControlName="authorOne"
              type="text"
              pInputText
              id="authorOne"
              required
            />
            <small *ngIf="isValidField('authorOne')" class="ml-2 text-red-500"
              >{{ displayError('authorOne') }}
            </small>
          </div>
          <div class="field">
            <label for="authorTwo">Autor dos</label>
            <input
              formControlName="authorTwo"
              type="text"
              pInputText
              id="authorTwo"
            />
          </div>
          <div class="field">
            <label for="authorThree">Autor tres</label>
            <input
              formControlName="authorThree"
              type="authorThree"
              pInputText
              id="authorThree"
            />
          </div>
          <div class="field">
            <label for="assessor">Asesor</label>
            <input
              formControlName="assessor"
              type="text"
              pInputText
              id="assessor"
              required
            />
            <small *ngIf="isValidField('assessor')" class="ml-2 text-red-500"
              >{{ displayError('assessor') }}
            </small>
          </div>
          <div class="field">
            <label for="year">Año</label>
            <input
              formControlName="year"
              type="number"
              pInputText
              id="year"
              required
            />
            <small *ngIf="isValidField('year')" class="ml-2 text-red-500">{{
              displayError('year')
            }}</small>
          </div>
        </form>
      </ng-template>

      <ng-template pTemplate="footer">
        <button
          pButton
          pRipple
          label="Cancelar"
          icon="pi pi-times"
          class="p-button-text"
          (click)="hideDialog()"
        ></button>
        <button
          pButton
          pRipple
          label="Guardar"
          icon="pi pi-check"
          class="p-button-text"
          (click)="save()"
        ></button>
      </ng-template>
    </p-dialog>
    <p-confirmDialog [style]="{ width: '450px' }"></p-confirmDialog>
  `,
})
export class ModalThesisComponent implements OnInit {
  ngOnInit() {
    this.utilitiesService.isVisible$.subscribe(isVisible => {
      this.isVisible = isVisible;
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['thesis']) {
      this.patchFormValues();
    }
  }

  @Input() thesis!: IThesis;
  @Output() updatedList = new EventEmitter<IThesis[]>();

  public isVisible: boolean = false;
  public form: FormGroup = this.fb.group({
    title: [this.thesis?.title, [Validators.required]],
    authorOne: [this.thesis?.authorOne, [Validators.required]],
    authorTwo: [this.thesis?.authorTwo],
    authorThree: [this.thesis?.authorThree],
    year: [
      this.thesis?.year,
      [Validators.required, Validators.minLength(4), Validators.maxLength(4)],
    ],
    assessor: [this.thesis?.assessor, [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private thesisService: ThesisService,
    private utilitiesService: UtilitiesService
  ) {}

  hideDialog() {
    this.isVisible = false;
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.thesisService
      .updateThesis(this.thesis.id!, this.form.value)
      .subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: 'Se actualizó el registro',
          });
          this.thesisService
            .getThesis()
            .subscribe(thesis => this.updatedList.emit(thesis));
        },
        error: (resp: HttpErrorResponse) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Ups!',
            detail: `${resp}`,
          });
        },
      });

    this.isVisible = false;
  }

  public isValidField(field: string): boolean | null {
    return customValidators.validatorFields(field, this.form);
  }

  public displayError(field: string): string | null {
    return customValidators.errorsDisplayer(field, this.form);
  }

  private patchFormValues() {
    if (this.thesis) {
      this.form.patchValue(this.thesis);
    }
  }
}
