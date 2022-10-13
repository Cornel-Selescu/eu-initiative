import { Component, Input } from '@angular/core';
import { Signator } from 'src/app/typings/signator';

@Component({
  selector: 'recent-signatories',
  templateUrl: './recent-signatories.component.html',
  styleUrls: ['./recent-signatories.component.scss']
})
export class RecentSignatoriesComponent {
  @Input('signators') signators: Signator[];
}
