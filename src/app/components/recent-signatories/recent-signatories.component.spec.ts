import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSignatoriesComponent } from './recent-signatories.component';

describe('RecentSignatoriesComponent', () => {
  let component: RecentSignatoriesComponent;
  let fixture: ComponentFixture<RecentSignatoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentSignatoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentSignatoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
