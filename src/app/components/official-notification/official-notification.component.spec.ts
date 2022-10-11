import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialNotificationComponent } from './official-notification.component';

describe('OfficialNotificationComponent', () => {
  let component: OfficialNotificationComponent;
  let fixture: ComponentFixture<OfficialNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficialNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficialNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
