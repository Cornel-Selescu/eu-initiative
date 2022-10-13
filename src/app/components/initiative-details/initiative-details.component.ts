import { Component, Input } from '@angular/core';
import { InitiativeDetails } from 'src/app/typings/initiative-details';

@Component({
  selector: 'initiative-details',
  templateUrl: './initiative-details.component.html',
  styleUrls: ['./initiative-details.component.scss']
})
export class InitiativeDetailsComponent  {
  @Input('details') initiativeInfo: InitiativeDetails;
  toggleMoreInfo(): void {
    this.moreInfoVisible = !this.moreInfoVisible;
  }
  moreInfoVisible: boolean = false;
}
