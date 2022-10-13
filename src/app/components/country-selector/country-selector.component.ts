import { Component, Output, EventEmitter } from '@angular/core';
import { Country } from '../../typings/country'

@Component({
  selector: 'country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.scss']
})
export class CountrySelectorComponent {
  @Output('select') select = new EventEmitter();

  countriesList: Country[] = [
    { code: 'at', name: 'Austria', hasEID: true },
    { code: 'be', name: 'Belgium', hasEID: true },
    { code: 'bg', name: 'Bulgaria' },
    { code: 'hr', name: 'Croatia', hasEID: true },
    { code: 'cy', name: 'Cyprus' },
    { code: 'cz', name: 'Czechia', hasEID: true },
    { code: 'dk', name: 'Denmark' },
    { code: 'ee', name: 'Estonia', hasEID: true },
    { code: 'fi', name: 'Finland' },
    { code: 'fr', name: 'France' },
    { code: 'de', name: 'Germany', hasEID: true },
    { code: 'gr', name: 'Greece' },
    { code: 'hu', name: 'Hungary' },
    { code: 'ie', name: 'Ireland' },
    { code: 'it', name: 'Italy', hasEID: true },
    { code: 'lv', name: 'Latvia', hasEID: true },
    { code: 'lt', name: 'Lithuania', hasEID: true },
    { code: 'lu', name: 'Luxembourg', hasEID: true },
    { code: 'mt', name: 'Malta', hasEID: true },
    { code: 'nl', name: 'Netherlands', hasEID: true },
    { code: 'pl', name: 'Poland' },
    { code: 'pt', name: 'Portugal', hasEID: true },
    { code: 'ro', name: 'Romania' },
    { code: 'sk', name: 'Slovakia', hasEID: true },
    { code: 'si', name: 'Slovenia' },
    { code: 'es', name: 'Spain', hasEID: true },
    { code: 'se', name: 'Sweden' },
  ];

  selectedCountryCode: string = '';

  onSelect(): void {
    if (this.selectedCountryCode) {
      const countryObj = this.countriesList.find(country => country.code == this.selectedCountryCode);
      this.select.emit(countryObj);
    }
  }
}
