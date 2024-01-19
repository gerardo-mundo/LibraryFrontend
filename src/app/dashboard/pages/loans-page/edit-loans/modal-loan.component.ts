import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UtilitiesService } from 'src/app/dashboard/services/utilities.service';

@Component({
  selector: 'modal-loan-dashboard',
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
          <label for="title">Título</label>
          <input
            formControlName="title"
            type="text"
            pInputText
            id="title"
            required
          />
          <!-- <small *ngIf="isValidField('title')" class="ml-2 text-red-500">{{
            displayError('title')
          }}</small> -->
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
          <!-- <small *ngIf="isValidField('author')" class="ml-2 text-red-500"
            >{{ displayError('author') }}
          </small> -->
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
          <!-- <small *ngIf="isValidField('publisher')" class="ml-2 text-red-500"
            >{{ displayError('publisher') }}
          </small> -->
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
          <!-- <small *ngIf="isValidField('year')" class="ml-2 text-red-500">{{
            displayError('year')
          }}</small> -->
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
          <!-- <small *ngIf="isValidField('isbn')" class="ml-2 text-red-500">{{
            displayError('isbn')
          }}</small> -->
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
          <!-- <small *ngIf="isValidField('issn')" class="ml-2 text-red-500">{{
            displayError('issn')
          }}</small> -->
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
          <!-- <small *ngIf="isValidField('vol')" class="ml-2 text-red-500">{{
            displayError('vol')
          }}</small> -->
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
  styles: [
  ]
})
export class ModalLoanComponent implements OnInit{
  constructor(private fb: FormBuilder, private utilitiesService: UtilitiesService) {}
  
  ngOnInit(): void {
    this.utilitiesService.isVisible$.subscribe(visibility => this.isVisible = visibility);
    const date = new Date();
    console.log(date.toString());
    
  };

  public form: FormGroup = this.fb.group({});
  public isVisible: boolean = false;

  public save() {

  };

  public hideDialog() {
    this.isVisible = false;
  };

  data = [
    {
      "path": "/DevolutionDate",
      "op": "replace",
      "value": "2023-09-15"
    },
    {
      "path": "/Returned",
      "op": "replace",
      "value": true
    }
  ]

};
