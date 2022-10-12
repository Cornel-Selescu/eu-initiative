import { Component, OnInit } from '@angular/core';

type Signator = {
  country: string,
  date: string
};

@Component({
  selector: 'recent-signatories',
  templateUrl: './recent-signatories.component.html',
  styleUrls: ['./recent-signatories.component.scss']
})
export class RecentSignatoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signators: Signator[] = [{
    country: 'Italy',
    date: '12-Oct-2022'
  }, {
    country: 'France',
    date: '11-Oct-2022'
  }, {
    country: 'Italy',
    date: '11-Oct-2022'
  }, {
    country: 'France',
    date: '11-Oct-2022'
  }, {
    country: 'Italy',
    date: '11-Oct-2022'
  }]

}
