import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SelectButtonOptionClickEvent } from 'primeng/selectbutton';

import * as CustomValidators from 'src/app/shared/helpers/validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  constructor(private fb: FormBuilder) {}

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
  };

  public onSave() {
    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
      return;
    }
    console.log(this.registerForm.value);
    
  }

  public isValidField(value: string): boolean | null {
    return CustomValidators.validatorFields(value, this.registerForm);
  }

  public displayError(value: string): string | null {
    return CustomValidators.errorsDisplayer(value, this.registerForm);
  }
}
