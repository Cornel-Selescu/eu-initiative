import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'country-support',
  templateUrl: './country-support.component.html',
  styleUrls: ['./country-support.component.scss']
})
export class CountrySupportComponent {
  @Output('fill-form') fillForm = new EventEmitter();

  statementIsRead: boolean = false;
  notSupported: boolean = false;

  selectUseEID() {
    // display some kind of error
  }
  selectFillTheForm() {
    this.fillForm.emit();
  }
}
