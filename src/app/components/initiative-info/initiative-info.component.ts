import { Component, OnInit } from '@angular/core';
import { InitiativeDataService } from 'src/app/services/initiative-data.service';

import { InitiativeInfo } from 'src/app/typings/initiative-info';

@Component({
  selector: 'initiative-info',
  templateUrl: './initiative-info.component.html',
  styleUrls: ['./initiative-info.component.scss'],

})
export class InitiativeInfoComponent implements OnInit {
  initiative: InitiativeInfo;
  constructor(private initiativeServce: InitiativeDataService) {
  }
  ngOnInit(): void {
    this.initiativeServce.getInitiative().subscribe(response => {
      this.initiative = response as InitiativeInfo;
    }, error => {
      alert('Error ocured');
      console.log(error);
    });
  }
}
