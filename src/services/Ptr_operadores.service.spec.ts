
import { TestBed } from '@angular/core/testing';

import { Ptr_operadoresService } from './Ptr_operadores.service';

describe('Ptr_operadoresService', () => {
  let service: Ptr_operadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ptr_operadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});