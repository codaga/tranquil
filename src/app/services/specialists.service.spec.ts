import { TestBed } from '@angular/core/testing';

import { SpecialistsService } from './specialists.service';

describe('SpecialistsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpecialistsService = TestBed.get(SpecialistsService);
    expect(service).toBeTruthy();
  });
});
