import { Component, OnInit } from '@angular/core';
import { Country } from '../../typings/country'

@Component({
  selector: 'initiative-form',
  templateUrl: './initiative-form.component.html',
  styleUrls: ['./initiative-form.component.scss']
})
export class InitiativeFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  visibleCountrySelector: boolean = true;
  visibleCountrySupport: boolean = false;
  visibleSuporterInfo: boolean = false;

  onCountrySelect(country: Country): void {
    console.log(country);
    this.visibleCountrySelector = false;
    if(country.hasEID) {
      this.visibleCountrySupport = true;
      //and form hides one of the checkboxes
    } else {
      this.visibleSuporterInfo = true;
    }
  }

}
