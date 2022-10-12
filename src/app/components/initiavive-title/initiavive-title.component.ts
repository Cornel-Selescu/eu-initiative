import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'initiavive-title',
  templateUrl: './initiavive-title.component.html',
  styleUrls: ['./initiavive-title.component.scss']
})
export class InitiaviveTitleComponent implements OnInit {
  @Input('title') title: string = 'Win It On The Pitch';
  
  constructor() { }

  ngOnInit(): void {
  }

}
