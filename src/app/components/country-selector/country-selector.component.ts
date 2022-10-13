import { Component, Output, EventEmitter } from '@angular/core';
import { Country } from 'src/app/typings/country'
import { InitiativeDataService } from 'src/app/services/initiative-data.service';

@Component({
  selector: 'country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.scss']
})
export class CountrySelectorComponent {
  @Output('select') select = new EventEmitter();

  constructor(private initiativeServce: InitiativeDataService) {
  }

  ngOnInit(): void {
    this.initiativeServce.getCountries().subscribe(response => {
      this.countriesList = response as Country[];
    }, error => {
      alert('Error ocured');
      console.log(error);
    });
  }
  countriesList: Country[];
  selectedCountryCode: string = '';

  onSelect(): void {
    if (this.selectedCountryCode) {
      const countryObj = this.countriesList.find(country => country.code == this.selectedCountryCode);
      this.select.emit(countryObj);
    }
  }
}
