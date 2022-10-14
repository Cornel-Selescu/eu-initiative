import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {
    static ageOver18(day: AbstractControl, month: AbstractControl, year: AbstractControl): ValidatorFn {
        return (): ValidationErrors | null => {
            if (year.value && day.value && month.value) {
                let dateOfBirth = new Date(year.value, month.value - 1, day.value);
                let today = new Date();
                let yearsAgo18 = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
                if (dateOfBirth.getTime() > yearsAgo18.getTime()) {
                    return { under18: true };
                }
            }
            return null;
        }
    }
}