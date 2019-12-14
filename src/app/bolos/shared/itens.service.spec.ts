import { TestBed } from '@angular/core/testing';

import { ItensService } from './itens.service';

describe('ItensService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItensService = TestBed.get(ItensService);
    expect(service).toBeTruthy();
  });
});
