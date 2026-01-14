import { Validator, AbstractControl, ValidationErrors } from '@angular/forms';

export class ValidaSelectDirectiveValidator implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
        // Validar que se haya seleccionado un país
        if (!control.value || control.value === '') {
            return { 'required': true };
        }
        return null;
    }
}