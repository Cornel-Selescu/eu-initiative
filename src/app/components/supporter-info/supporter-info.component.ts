import { Component, Input, Output, EventEmitter , OnInit} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CustomValidators } from 'src/app/validators/custom-validators';

import { Country } from 'src/app/typings/country';

@Component({
  selector: 'supporter-info',
  templateUrl: './supporter-info.component.html',
  styleUrls: ['./supporter-info.component.scss']
})
export class SupporterInfoComponent  implements OnInit {
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
      legalDocument: [this.country?.documentOptions[0]?.code || '', [
        Validators.required,
        // Validators.minLength(3),
        // CustomValidators.noSpaces,
        // Validators.maxLength(10)
      ], [
        // CustomValidators.noSpaces
      ]],
      initiativeId: [this.initiativeId, [Validators.required]],
      documentId: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      certyfy: [!!this.country.hasEID, [Validators.required]],
      statement: [!!this.country.hasEID , [Validators.required]],
      dateOfBirth: fb.group({
        day: [Validators.required],
        month: [Validators.required],
        year: [Validators.required]
      }),
    });
  }

  onBack() {
    this.back.emit();
  }

  onSubmit() {
    if (false) { //adds errors
      this.initiativeForm.setErrors({
        invalidInitiative: true
      });
    } else { // removes the errors
      this.initiativeForm.setErrors({
        invalidInitiative: null
      });
      this.initiativeForm.updateValueAndValidity();
      console.log(this.initiativeForm.value);
    }
  }
}
