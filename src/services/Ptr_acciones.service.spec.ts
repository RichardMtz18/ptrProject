
import { TestBed } from '@angular/core/testing';

import { Ptr_accionesService } from './Ptr_acciones.service';

describe('Ptr_accionesService', () => {
  let service: Ptr_accionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ptr_accionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});