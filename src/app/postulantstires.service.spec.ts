import { TestBed } from '@angular/core/testing';

import { PostulantstiresService } from './postulantstires.service';

describe('PostulantstiresService', () => {
  let service: PostulantstiresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostulantstiresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
