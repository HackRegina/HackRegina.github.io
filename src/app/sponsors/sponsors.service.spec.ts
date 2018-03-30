import { TestBed, inject } from '@angular/core/testing';

import { SponsorsService } from './sponsors.service';

describe('SponsorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SponsorsService]
    });
  });

  it('should be created', inject([SponsorsService], (service: SponsorsService) => {
    expect(service).toBeTruthy();
  }));
});
