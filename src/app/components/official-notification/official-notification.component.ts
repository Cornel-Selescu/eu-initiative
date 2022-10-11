import { Component } from '@angular/core';

@Component({
  selector: 'official-notification',
  templateUrl: './official-notification.component.html',
  styleUrls: ['./official-notification.component.scss']
})
export class OfficialNotificationComponent {

  messageVisible: boolean = false;

  toggleMessage($event: MouseEvent):void {
    $event.preventDefault();
    this.messageVisible = !this.messageVisible;
  }

}
