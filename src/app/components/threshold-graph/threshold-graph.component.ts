import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'threshold-graph',
  templateUrl: './threshold-graph.component.html',
  styleUrls: ['./threshold-graph.component.scss']
})
export class ThresholdGraphComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.carouselItems[0].active = true;
  }

  getPercent(dividend, divisor): number {
    return Math.round((dividend || 0) / (divisor || 1) * 10000) / 100;
  }

  getSvgStrokeDashery(dividend, divisor) {
    return `calc(${this.getPercent(dividend, divisor)} * 31.4 / 100) 31.4`;
  }

  carouselItems: {
    country: string,
    supporters: number,
    maxSupporters: number,
    active?: boolean
  }[] = [{
    country: 'Belgium',
    supporters: 377,
    maxSupporters: 13395
  }, {
    country: 'Italy',
    supporters: 20,
    maxSupporters: 1200
  }, {
    country: 'France',
    supporters: 55,
    maxSupporters: 111111
  }, {
    country: 'Germany',
    supporters: 44,
    maxSupporters: 3000
  }, {
    country: 'Romania',
    supporters: 11111,
    maxSupporters: 11111
  },]
}
