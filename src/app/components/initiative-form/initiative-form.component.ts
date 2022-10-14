import { Component, Input } from '@angular/core';
import { Country } from 'src/app/typings/country'

@Component({
  selector: 'initiative-form',
  templateUrl: './initiative-form.component.html',
  styleUrls: ['./initiative-form.component.scss']
})
export class InitiativeFormComponent {
  @Input('initiative-id') initiativeId: string | number;

  submitSuccess: boolean = false;
  visibleCountrySelector: boolean = true;
  visibleCountrySupport: boolean = false;
  visibleSuporterInfo: boolean = false;

  statementIsRead: boolean = false;
  selectedCountry: Country;

  onCountrySelect(country: Country): void {
    this.selectedCountry = country;
    this.visibleCountrySelector = false;
    this.statementIsRead = false;
    if (country.hasEID) {
      this.visibleCountrySupport = true;
    } else {
      this.visibleSuporterInfo = true;
    }
  }

  showSupporterInfo() {
    this.visibleCountrySupport = false;
    this.visibleSuporterInfo = true;
    this.statementIsRead = true;
  }

  showCountrySelect() {
    this.visibleSuporterInfo = false;
    this.visibleCountrySelector = true;
  }

  onSubmitSuccess() {
    this.submitSuccess = true;
    this.showCountrySelect();
    setTimeout(() => {
      this.submitSuccess = false;
    }, 5000);
  }
}
