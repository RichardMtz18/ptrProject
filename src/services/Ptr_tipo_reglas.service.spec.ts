
import { TestBed } from '@angular/core/testing';

import { Ptr_tipo_reglasService } from './Ptr_tipo_reglas.service';

describe('Ptr_tipo_reglasService', () => {
  let service: Ptr_tipo_reglasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ptr_tipo_reglasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});