import { FormGroup } from '@angular/forms';

export const validatorFields = (
  field: string,
  form: FormGroup
): boolean | null => {
  return form.controls[field].errors && form.controls[field].touched;
};

export const errorsDisplayer = (
  field: string,
  form: FormGroup
): string | null => {
  if (!form.controls[field].errors) return null;

  const errors = form.controls[field].errors ?? {};

  for (const key of Object.keys(errors)) {
    switch (key) {
      case 'required':
        return 'Este campo es requerido';
      case 'minlength':
        return `La extensión mínima es de ${errors['minlength'].requiredLength}`;
    }
  }
  return null;
};
