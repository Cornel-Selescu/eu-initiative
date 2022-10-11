import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiaviveTitleComponent } from './initiavive-title.component';

describe('InitiaviveTitleComponent', () => {
  let component: InitiaviveTitleComponent;
  let fixture: ComponentFixture<InitiaviveTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitiaviveTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitiaviveTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
