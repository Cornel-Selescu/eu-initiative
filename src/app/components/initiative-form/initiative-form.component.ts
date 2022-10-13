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

  statementIsRead: boolean = false;

  onCountrySelect(country: Country): void {
    console.log(country);
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
}
