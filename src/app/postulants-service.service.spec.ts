import { TestBed } from '@angular/core/testing';

import { PostulantsServiceService } from './postulants-service.service';

describe('PostulantsServiceService', () => {
  let service: PostulantsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostulantsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
