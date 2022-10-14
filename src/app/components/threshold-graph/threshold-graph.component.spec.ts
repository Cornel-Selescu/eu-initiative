import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThresholdGraphComponent } from './threshold-graph.component';

describe('ThresholdGraphComponent', () => {
  let component: ThresholdGraphComponent;
  let fixture: ComponentFixture<ThresholdGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThresholdGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThresholdGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
