import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineSignaturesComponent } from './online-signatures.component';

describe('OnlineSignaturesComponent', () => {
  let component: OnlineSignaturesComponent;
  let fixture: ComponentFixture<OnlineSignaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineSignaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineSignaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
