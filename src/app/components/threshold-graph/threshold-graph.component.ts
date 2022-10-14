import { Component, Input } from '@angular/core';
import { ThresholdCountry } from 'src/app/typings/threshold-country';

@Component({
  selector: 'threshold-graph',
  templateUrl: './threshold-graph.component.html',
  styleUrls: ['./threshold-graph.component.scss']
})
export class ThresholdGraphComponent {
  @Input('threshold-countries') thresholdCountries: ThresholdCountry[];
  

  getPercent(dividend, divisor): number {
    return Math.round((dividend || 0) / (divisor || 1) * 10000) / 100;
  }

  getSvgStrokeDashery(dividend, divisor) {
    return `calc(${this.getPercent(dividend, divisor)} * 31.4 / 100) 31.4`;
  }
}
