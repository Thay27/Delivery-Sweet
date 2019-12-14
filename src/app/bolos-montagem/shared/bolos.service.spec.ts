import { TestBed } from '@angular/core/testing';

import { BolosService } from './bolos.service';

describe('BolosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BolosService = TestBed.get(BolosService);
    expect(service).toBeTruthy();
  });
});
