import { TestBed } from '@angular/core/testing';

import { TouristHireService } from './tourist-hire.service';

describe('TouristHireService', () => {
  let service: TouristHireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TouristHireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
