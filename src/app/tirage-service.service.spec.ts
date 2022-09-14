import { TestBed } from '@angular/core/testing';

import { TirageServiceService } from './tirage-service.service';

describe('TirageServiceService', () => {
  let service: TirageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TirageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
