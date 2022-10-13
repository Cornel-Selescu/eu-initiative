import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
    static noSpaces(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).includes(' ')) {
            return {
                noSpaces: true
            };
        }
        return null;
    }
}