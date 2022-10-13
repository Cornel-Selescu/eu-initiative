import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupporterInfoComponent } from './supporter-info.component';

describe('SupporterInfoComponent', () => {
  let component: SupporterInfoComponent;
  let fixture: ComponentFixture<SupporterInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupporterInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupporterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
