import { TestBed } from '@angular/core/testing';

import { InitiativeDataService } from './initiative-data.service';

describe('InitiativeDataService', () => {
  let service: InitiativeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitiativeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
