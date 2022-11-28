
import { TestBed } from '@angular/core/testing';

import { Ptr_objetosService } from './Ptr_objetos.service';

describe('Ptr_objetosService', () => {
  let service: Ptr_objetosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ptr_objetosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});