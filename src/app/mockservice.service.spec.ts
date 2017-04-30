import { TestBed, inject } from '@angular/core/testing';

import { MockService } from './mockservice.service';

describe('MockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockserviceService]
    });
  });

  it('should ...', inject([MockService], (service: MockService) => {
    expect(service).toBeTruthy();
  }));
});
