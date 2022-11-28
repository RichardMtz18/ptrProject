
import { TestBed } from '@angular/core/testing';

import { Ptr_tipo_dominiosService } from './Ptr_tipo_dominios.service';

describe('Ptr_tipo_dominiosService', () => {
  let service: Ptr_tipo_dominiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ptr_tipo_dominiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});