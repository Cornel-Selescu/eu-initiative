import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'initiative-info',
  templateUrl: './initiative-info.component.html',
  styleUrls: ['./initiative-info.component.scss'],

})
export class InitiativeInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleMoreInfo(): void {
    this.moreInfoVisible = !this.moreInfoVisible;
  }

  moreInfoVisible: boolean = false;
  initiativeInfo: {
    initiativeLogo: string,
    objectives: string[],
    commissionWebpage: string,
    initiativeWebsite?: string,
    contactRep?: {
      name: string,
      email: string
    },
    contactSub?: {
      name: string,
      email: string
    },
    registrationNumber: string,
    registrationDate: string

  } = {
      initiativeLogo: '/assets/img/end-slaughter.png',
      objectives: [
        `1 - Exclude livestock farming from list of activities eligible for agricultural subsidies and include ethical and environmentally friendly alternatives, such as cellular agriculture and plant proteins.`,
        `2 - Incentives for the production and sale of plant-based products and those made using cellular agriculture.`
      ],
      commissionWebpage: 'https://europa.eu/citizens-initiative/initiatives/details/2022/000003',
      initiativeWebsite: 'https://www.endtheslaughterage.eu/',
      contactRep: {
        name: 'Filippo Borsellino',
        email: 'endtheslaughterage@gmail.com'
      },
      contactSub: {
        name: 'Darryl Grima',
        email: 'info@veggymalta.com'
      },
      registrationNumber: 'ECI(2022)000003',
      registrationDate: '05/06/2022'
    }

}
