import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySupportComponent } from './country-support.component';

describe('CountrySupportComponent', () => {
  let component: CountrySupportComponent;
  let fixture: ComponentFixture<CountrySupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountrySupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountrySupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
