import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';

import { IPublication } from 'src/app/dashboard/interfaces/publication.interface';
import { PublicationsService } from 'src/app/dashboard/services/publications.service';
import { UtilitiesService } from 'src/app/dashboard/services/utilities.service';
import * as customValidators from '../../../../shared/helpers/validators';

@Component({
  selector: 'modal-publication-dashboard',
  template: `
  <p-dialog
    [(visible)]="isVisible"
    [style]="{ width: '450px' }"
    header="Actualizar datos de publicación"
    [modal]="true"
    styleClass="p-fluid"
  >
    <ng-template pTemplate="content">
      <form [formGroup]="form">
      <div class="field">
          <label for="type">Tipo de publicación actual</label>
          <p-selectButton
                formControlName="type" 
                [options]="publicationTypes" 
                [multiple]="false" 
                optionLabel="name"
                optionValue="value" 
                >
                </p-selectButton>
          <small *ngIf="isValidField('type')" class="ml-2 text-red-500">{{
            displayError('type')
          }}</small>
        </div>
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
          <label for="author">Autor</label>
          <input
            formControlName="author"
            type="text"
            pInputText
            id="author"
            required
          />
          <small *ngIf="isValidField('author')" class="ml-2 text-red-500"
            >{{ displayError('author') }}
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
          <label for="authorFour">Autor cuatro</label>
          <input
            formControlName="authorFour"
            type="authorFour"
            pInputText
            id="authorFour"
          />
        </div>
        <div class="field">
          <label for="publisher">Editorial</label>
          <input
            formControlName="publisher"
            type="text"
            pInputText
            id="publisher"
            required
          />
          <small *ngIf="isValidField('publisher')" class="ml-2 text-red-500"
            >{{ displayError('publisher') }}
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
        <div class="field">
          <label for="isbn">ISBN</label>
          <input
            formControlName="isbn"
            type="text"
            pInputText
            id="isbn"
            required
          />
          <small *ngIf="isValidField('isbn')" class="ml-2 text-red-500">{{
            displayError('isbn')
          }}</small>
        </div>
        <div class="field">
          <label for="issn">ISSN</label>
          <input
            formControlName="issn"
            type="text"
            pInputText
            id="issn"
            required
          />
          <small *ngIf="isValidField('issn')" class="ml-2 text-red-500">{{
            displayError('issn')
          }}</small>
        </div>
        <div class="field">
          <label for="vol">Volúmen</label>
          <input
            formControlName="vol"
            type="text"
            pInputText
            id="vol"
            required
          />
          <small *ngIf="isValidField('vol')" class="ml-2 text-red-500">{{
            displayError('vol')
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
export class ModalPublicationComponent {
  ngOnInit() {
    this.utilitiesService.isVisible$.subscribe(isVisible => {
      this.isVisible = isVisible;
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['publication']) {
      this.patchFormValues();
    }
  }

  @Input() publication!: IPublication;
  @Output() updatedList = new EventEmitter<IPublication[]>();

  public isVisible: boolean = false;

  public publicationTypes = [
    { name: 'Artículo', value: 1 },
    { name: 'Publicación', value: 2 },
    { name: 'Revista', value: 3 }
  ];
  
  public value!:number;

  public form: FormGroup = this.fb.group({
    type: [null, [Validators.required]],
    title: ['', [Validators.required, Validators.maxLength(150)]],
    author: ['', [Validators.required, Validators.maxLength(120), Validators.minLength(5)]],
    authorTwo: ['', [Validators.maxLength(120), Validators.minLength(5)]],
    authorThree: ['', [Validators.maxLength(120), Validators.minLength(5)]],
    authorFour: ['', [Validators.maxLength(120), Validators.minLength(5)]],
    publisher: ['', [Validators.required, Validators.maxLength(50)]],
    isbn: ['', [Validators.maxLength(16), Validators.minLength(16)]],
    issn: ['', [Validators.maxLength(9), Validators.minLength(9)]],
    year: [null, [Validators.required, Validators.maxLength(4), Validators.minLength(4)]],
    vol: ['', [Validators.required, Validators.maxLength(10)]],
  });

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private publicationService: PublicationsService,
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

    this.publicationService
      .updatePublication(this.publication.id!, this.form.value)
      .subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: 'Se actualizó el registro',
          });
          this.publicationService
            .getPublications()
            .subscribe(publication => this.updatedList.emit(publication));
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
    if (this.publication) {
      this.form.patchValue(this.publication);
    }
  }
}
