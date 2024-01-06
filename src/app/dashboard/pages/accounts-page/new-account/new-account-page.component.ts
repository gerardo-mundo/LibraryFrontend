import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import * as CustomValidators from 'src/app/shared/helpers/validators';



@Component({
  selector: 'app-new-account-page',
  templateUrl: './new-account-page.component.html',
  styles: [
  ]
})
export class NewAccountPageComponent {
  constructor(private fb: FormBuilder) {}

  public registerForm: FormGroup = this.fb.group({
    email: [],
    password: [],
    name: [],
    lastName: [],
    employeeKey: []
  });

  public isValidField(value: string) {
    return CustomValidators.validatorFields(value, this.registerForm);
  };

  public displayError(value: string) {
    return CustomValidators.errorsDisplayer(value, this.registerForm);
  };
}
