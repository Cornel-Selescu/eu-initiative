import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CustomValidators } from 'src/app/validators/custom-validators';

import { InitiativeDataService } from 'src/app/services/initiative-data.service';

import { Country } from 'src/app/typings/country';

@Component({
  selector: 'supporter-info',
  templateUrl: './supporter-info.component.html',
  styleUrls: ['./supporter-info.component.scss']
})
export class SupporterInfoComponent implements OnInit {
  @Input('initiative-id') initiativeId: string | number;
  @Input('country') country: Country;

  @Output('back') back = new EventEmitter();
  @Output('success') success = new EventEmitter();
  @Output('fail') fail = new EventEmitter();

  submitFailed: boolean = false;

  private currentYear = new Date().getFullYear()
  selectableYears: number[] = Array(this.currentYear - 1900).fill(this.currentYear).map((x, i) => x - i);
  monthsInOneYear: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  daysInOneMonth: number[] = Array(31).fill(1).map((x, i) => i + 1);

  initiativeForm: FormGroup;

  constructor(private fb: FormBuilder, private initiativeServce: InitiativeDataService) { }

  ngOnInit(): void {
    const fb = this.fb;
    this.initiativeForm = fb.group({
      legalDocument: [this.country?.documentOptions[0]?.code || '',
      [Validators.required]],
      initiativeId: [this.initiativeId],
      documentId: ['', [
        Validators.required,
        Validators.pattern('^([0-9a-zA-Z\\s.\'-]{0,})'),
        Validators.minLength(5),
        Validators.maxLength(20),
      ], []],
      firstName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern('^([a-zA-Zà-úÀ-Ú\\s.,\'-]{0,})')
      ]],
      lastName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern('^([a-zA-Zà-úÀ-Ú\\s.,\'-]{0,})')
      ]],
      certify: [!!this.country.hasEID, [Validators.requiredTrue]],
      statement: [!!this.country.hasEID, [Validators.requiredTrue]],
      dateOfBirth: fb.group({
        day: ['', [
          Validators.required
        ]],
        month: ['', [
          Validators.required,

        ]],
        year: ['', [
          Validators.required
        ]]
      }),
    });
    this.addDateVaildators();

  }

  addDateVaildators() {
    let dayControl = this.initiativeForm.get('dateOfBirth.day');
    let monthControl = this.initiativeForm.get('dateOfBirth.month');
    let yearControl = this.initiativeForm.get('dateOfBirth.year');
    dayControl.addValidators(CustomValidators.ageOver18(dayControl, monthControl, yearControl));
    monthControl.addValidators(CustomValidators.ageOver18(dayControl, monthControl, yearControl));
    yearControl.addValidators(CustomValidators.ageOver18(dayControl, monthControl, yearControl));
  }

  get legalDocument() {
    return this.initiativeForm.get('legalDocument');
  }

  get documentId() {
    return this.initiativeForm.get('documentId');
  }

  get firstName() {
    return this.initiativeForm.get('firstName');
  }

  get lastName() {
    return this.initiativeForm.get('lastName');
  }

  get certify() {
    return this.initiativeForm.get('certify');
  }

  get statement() {
    return this.initiativeForm.get('statement');
  }

  get day() {
    return this.initiativeForm.get('dateOfBirth.day');
  }

  get month() {
    return this.initiativeForm.get('dateOfBirth.month');
  }

  get year() {
    return this.initiativeForm.get('dateOfBirth.year');
  }

  parseJson(obj): string {
    return JSON.stringify(obj, null, 2)
  }

  onBack() {
    this.back.emit();
  }

  onSubmit() {
    this.initiativeForm.markAllAsTouched();
    if (this.initiativeForm.valid) {
      this.initiativeServce.supportInitiative(this.initiativeForm.value)?.subscribe(response => {
        this.success.emit(response);
        console.log(response);
        //show message that everything went well
      }, error => {
        this.fail.emit(error);
        this.submitFailed = true;
        setTimeout(() => {
          this.submitFailed = false;
        }, 3000);
        console.log(error);
      });
    }
  }
}
