
import { TestBed } from '@angular/core/testing';

import { Ptr_propiedadesService } from './Ptr_propiedades.service';

describe('Ptr_propiedadesService', () => {
  let service: Ptr_propiedadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ptr_propiedadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});