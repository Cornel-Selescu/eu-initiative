import { Component, Input} from '@angular/core';
import { SignitureInfo } from 'src/app/typings/signature-info';

@Component({
  selector: 'online-signatures',
  templateUrl: './online-signatures.component.html',
  styleUrls: ['./online-signatures.component.scss']
})
export class OnlineSignaturesComponent {
  @Input('signiture-info') signitureInfo: SignitureInfo;

  get progress() :number | undefined {
    if(this.signitureInfo?.onlineSignitures && this.signitureInfo?.totalSignitures) {
      return Math.round(this.signitureInfo.onlineSignitures * 100 / this.signitureInfo.totalSignitures);
    }
  }
}
