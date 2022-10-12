import { Component, OnInit } from '@angular/core';

type SignitureInfo = {
  totalSignitures: number,
  onlineSignitures: number,
  endDate: string,
  socialMedia: {
    facebook: string,
    twitter: string,
    instagram: string,
    linkedin: string
  }
}

@Component({
  selector: 'online-signatures',
  templateUrl: './online-signatures.component.html',
  styleUrls: ['./online-signatures.component.scss']
})
export class OnlineSignaturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signitureInfo: SignitureInfo = {
    totalSignitures: 1000000,
    onlineSignitures: 33944,
    endDate: '05/06/2023',
    socialMedia: {
      facebook: 'https://www.facebook.com/EndTheSlaughterAge',
      twitter: 'https://twitter.com/InteroperableEU/status/1115552962972147712/photo/1',
      instagram: 'https://www.instagram.com/endtheslaughterage/',
      linkedin: 'https://www.linkedin.com/in/cornelselescu/'
    }
  };

  get progress() :number {
    return Math.round(this.signitureInfo.onlineSignitures * 100 / this.signitureInfo.totalSignitures);
  }
}
