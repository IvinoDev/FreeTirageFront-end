import { TestBed } from '@angular/core/testing';

import { ListePostulantsService } from './liste-postulants.service';

describe('ListePostulantsService', () => {
  let service: ListePostulantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListePostulantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
