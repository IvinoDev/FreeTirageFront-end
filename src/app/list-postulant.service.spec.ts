import { TestBed } from '@angular/core/testing';

import { ListPostulantService } from './list-postulant.service';

describe('ListPostulantService', () => {
  let service: ListPostulantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPostulantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
