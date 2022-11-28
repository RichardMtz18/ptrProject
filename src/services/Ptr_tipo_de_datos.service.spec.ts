
import { TestBed } from '@angular/core/testing';

import { Ptr_tipo_de_datosService } from './Ptr_tipo_de_datos.service';

describe('Ptr_tipo_de_datosService', () => {
  let service: Ptr_tipo_de_datosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ptr_tipo_de_datosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});