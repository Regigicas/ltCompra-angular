import { TestBed } from '@angular/core/testing';

import { AlergenosService } from './alergenos.service';

describe('AlergenosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlergenosService = TestBed.get(AlergenosService);
    expect(service).toBeTruthy();
  });
});
