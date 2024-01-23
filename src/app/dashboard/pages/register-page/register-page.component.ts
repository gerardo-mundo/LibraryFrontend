import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { SelectButtonOptionClickEvent } from 'primeng/selectbutton';
import { MessageService } from 'primeng/api';

import * as CustomValidators from 'src/app/shared/helpers/validators';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  constructor(private fb: FormBuilder, 
              private usersService: UsersService,
              private messageService: MessageService) {}

  public registerForm: FormGroup = this.fb.group({
    type: [null, Validators.required],
    name: ['', [Validators.required, Validators.maxLength(40), Validators.minLength(3)]],
    secondName: ['', [Validators.maxLength(60)]],
    lastName: ['', [Validators.required, Validators.maxLength(60), Validators.minLength(3)]],
    motherName: ['', [Validators.required, Validators.maxLength(60), Validators.minLength(3)]],
    enrollmentNum: [null, [Validators.maxLength(8)]],
    employeeKey: [null, [Validators.maxLength(10)]],
    address: ['', [Validators.maxLength(120)]]
  })
  public loading: boolean = false;
  public userTypes = [
    { name: 'Estudiante', value: 1 },
    { name: 'Maestro', value: 2 },
    { name: 'Administrativo', value: 3 }
  ];
  private lastOptionSelected!: SelectButtonOptionClickEvent;
  public isStudent!: boolean;
  public isEmployee!: boolean; 

  public selectedOption(event: SelectButtonOptionClickEvent) {
    this.lastOptionSelected = event;
    this.isStudent = this.lastOptionSelected?.option?.value === 1;
    this.isEmployee = this.lastOptionSelected?.option?.value === 2 || this.lastOptionSelected?.option?.value === 3;
    
    if (this.isStudent) {
      this.registerForm.get('enrollmentNum')?.setValidators(
        [Validators.required, Validators.maxLength(8), Validators.minLength(8)]);
    } else {null}

    if (this.isEmployee) {
      this.registerForm.get('employeeKey')?.setValidators(
        [Validators.required, Validators.maxLength(10), Validators.minLength(8)]);
    } else {null}

    this.registerForm.updateValueAndValidity();
  };

  public onSave() {
    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
      return;
    }

    this.loading = true;

    this.usersService.postUser(this.registerForm.value).subscribe(
      {
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: 'Usuario registrado',
          });
          this.loading = false;
  
          this.registerForm.reset();
        }, 
        error: (resp: HttpErrorResponse) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Ups',
            detail: `${resp}`,
          });
  
          this.loading = false;
        }
      }
    )
    
  }

  public isValidField(value: string): boolean | null {
    return CustomValidators.validatorFields(value, this.registerForm);
  }

  public displayError(value: string): string | null {
    return CustomValidators.errorsDisplayer(value, this.registerForm);
  }
}
