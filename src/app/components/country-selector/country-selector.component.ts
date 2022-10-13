import { Component, OnInit } from '@angular/core';

type CountryCode = {
  country: string,
  code: string
}

@Component({
  selector: 'country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.scss']
})
export class CountrySelectorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  countriesList: CountryCode[] = [
    { code: 'at', country: 'Austria' },
    { code: 'be', country: 'Belgium' },
    { code: 'bg', country: 'Bulgaria' },
    { code: 'hr', country: 'Croatia' },
    { code: 'cy', country: 'Cyprus' },
    { code: 'cz', country: 'Czechia' },
    { code: 'dk', country: 'Denmark' },
    { code: 'ee', country: 'Estonia' },
    { code: 'fi', country: 'Finland' },
    { code: 'fr', country: 'France' },
    { code: 'de', country: 'Germany' },
    { code: 'gr', country: 'Greece' },
    { code: 'hu', country: 'Hungary' },
    { code: 'ie', country: 'Ireland' },
    { code: 'it', country: 'Italy' },
    { code: 'lv', country: 'Latvia' },
    { code: 'lt', country: 'Lithuania' },
    { code: 'lu', country: 'Luxembourg' },
    { code: 'mt', country: 'Malta' },
    { code: 'nl', country: 'Netherlands' },
    { code: 'pl', country: 'Poland' },
    { code: 'pt', country: 'Portugal' },
    { code: 'ro', country: 'Romania' },
    { code: 'sk', country: 'Slovakia' },
    { code: 'si', country: 'Slovenia' },
    { code: 'es', country: 'Spain' },
    { code: 'se', country: 'Sweden' },
  ];

}
