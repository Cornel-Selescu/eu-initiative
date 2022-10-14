/*
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
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomValidators } from 'src/app/validators/custom-validators';
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

describe('CustomValidators', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('Should be a function', () => {
        expect(typeof CustomValidators.ageOver18).toBe('function');
    });

    it('The result should be a function', () => {
        let dayControl = { value: 1 };
        let monthControl = { value: 1 };
        let yearControl = { value: 1 };
        expect(typeof CustomValidators.ageOver18(dayControl as AbstractControl, monthControl as AbstractControl, yearControl as AbstractControl)).toBe('function');
    });

    it('The default result should be null', () => {
        let dayControl = { value: 1 };
        let monthControl = { value: 1 };
        let yearControl = { value: 1 };
        let ageOver18Fn = CustomValidators.ageOver18(dayControl as AbstractControl, monthControl as AbstractControl, yearControl as AbstractControl);
        expect(ageOver18Fn(dayControl as AbstractControl)).toBeNull();
    });

    it('For the current date the result should be a validation error.', () => {
        let today = new Date();

        let dayControl = { value:  today.getDate() };
        let monthControl = { value:  today.getMonth() + 1};
        let yearControl = { value: today.getFullYear() };
        let ageOver18Fn = CustomValidators.ageOver18(dayControl as AbstractControl, monthControl as AbstractControl, yearControl as AbstractControl);
        expect(ageOver18Fn(dayControl as AbstractControl)).toEqual({ under18: true });
    });


    it('For 18 years ago minus one day the result should be a validation error.', () => {
        let today = new Date();
        let yearsAgo18minusOneDay = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate() + 1);

        let dayControl = { value:  yearsAgo18minusOneDay.getDate() };
        let monthControl = { value:  yearsAgo18minusOneDay.getMonth() + 1};
        let yearControl = { value: yearsAgo18minusOneDay.getFullYear() };
        let ageOver18Fn = CustomValidators.ageOver18(dayControl as AbstractControl, monthControl as AbstractControl, yearControl as AbstractControl);
        expect(ageOver18Fn(dayControl as AbstractControl)).toEqual({ under18: true });
    });

    it('For 18 years ago the result should be null.', () => {
        let today = new Date();
        let yearsAgo18 = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

        let dayControl = { value:  yearsAgo18.getDate() };
        let monthControl = { value:  yearsAgo18.getMonth() + 1};
        let yearControl = { value: yearsAgo18.getFullYear() };
        let ageOver18Fn = CustomValidators.ageOver18(dayControl as AbstractControl, monthControl as AbstractControl, yearControl as AbstractControl);
        expect(ageOver18Fn(dayControl as AbstractControl)).toBeNull();
    });

    it('For 18 years ago plus one day the result should be null.', () => {
        let today = new Date();
        let yearsAgo18plusOneDay = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate() - 1);

        let dayControl = { value:  yearsAgo18plusOneDay.getDate() };
        let monthControl = { value:  yearsAgo18plusOneDay.getMonth() + 1};
        let yearControl = { value: yearsAgo18plusOneDay.getFullYear() };
        let ageOver18Fn = CustomValidators.ageOver18(dayControl as AbstractControl, monthControl as AbstractControl, yearControl as AbstractControl);
        expect(ageOver18Fn(dayControl as AbstractControl)).toBeNull();
    });

    it('For the year 2000 the result should be null.', () => {
        let dayControl = { value:  1 };
        let monthControl = { value:  1};
        let yearControl = { value: 2000 };
        let ageOver18Fn = CustomValidators.ageOver18(dayControl as AbstractControl, monthControl as AbstractControl, yearControl as AbstractControl);
        expect(ageOver18Fn(dayControl as AbstractControl)).toBeNull();
    });

    it('For the year 1900 the result should be null.', () => {
        let dayControl = { value:  1 };
        let monthControl = { value:  1};
        let yearControl = { value: 1900 };
        let ageOver18Fn = CustomValidators.ageOver18(dayControl as AbstractControl, monthControl as AbstractControl, yearControl as AbstractControl);
        expect(ageOver18Fn(dayControl as AbstractControl)).toBeNull();
    });



});