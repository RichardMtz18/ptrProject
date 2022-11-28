
import { TestBed } from '@angular/core/testing';

import { Ptr_reglas_detService } from './Ptr_reglas_det.service';

describe('Ptr_reglas_detService', () => {
  let service: Ptr_reglas_detService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ptr_reglas_detService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});