import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Country } from 'src/app/typings/country';

@Component({
  selector: 'supporter-info',
  templateUrl: './supporter-info.component.html',
  styleUrls: ['./supporter-info.component.scss']
})
export class SupporterInfoComponent {
  @Input('has-statement') hasStatement: boolean;
  @Input('country') country: Country;

  @Output('back') back = new EventEmitter();

  onBack() {
    this.back.emit();
  }

  daysInOneMonth: number[] = Array(31).fill(1).map((x, i) => i + 1);
  monthsInOneYear: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  private currentYear = new Date().getFullYear()
  selectableYears: number[] = Array(this.currentYear - 1900).fill(this.currentYear).map((x, i) => x - i);
}
