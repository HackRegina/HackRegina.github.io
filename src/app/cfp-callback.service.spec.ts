import { TestBed, inject } from '@angular/core/testing';

import { CfpCallbackService } from './cfp-callback.service';

describe('CfpCallbackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CfpCallbackService]
    });
  });

  it('should be created', inject([CfpCallbackService], (service: CfpCallbackService) => {
    expect(service).toBeTruthy();
  }));
});
