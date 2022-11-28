
import { TestBed } from '@angular/core/testing';

import { Ptr_procesosService } from './Ptr_procesos.service';

describe('Ptr_procesosService', () => {
  let service: Ptr_procesosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ptr_procesosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});