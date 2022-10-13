import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CustomValidators } from 'src/app/validators/custom-validators';

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

  private currentYear = new Date().getFullYear()
  selectableYears: number[] = Array(this.currentYear - 1900).fill(this.currentYear).map((x, i) => x - i);
  monthsInOneYear: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  daysInOneMonth: number[] = Array(31).fill(1).map((x, i) => i + 1);

  initiativeForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const fb = this.fb;
    this.initiativeForm = fb.group({
      legalDocument: [this.country?.documentOptions[0]?.code || '',
      [Validators.required]],
      initiativeId: [this.initiativeId],
      documentId: ['',
        [Validators.required],
        []],
      firstName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]],
      lastName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]],
      certify: [!!this.country.hasEID, [Validators.requiredTrue]],
      statement: [!!this.country.hasEID, [Validators.requiredTrue]],
      dateOfBirth: fb.group({
        day: ['', [Validators.required]],
        month: ['', [Validators.required]],
        year: ['', [Validators.required]]
      }),
    });
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










  onBack() {
    this.back.emit();
  }

  onSubmit() {
    if (this.initiativeForm.valid) { 
      // Send to the server
    }
  }
}
