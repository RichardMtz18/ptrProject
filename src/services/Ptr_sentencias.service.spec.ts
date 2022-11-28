
import { TestBed } from '@angular/core/testing';

import { Ptr_sentenciasService } from './Ptr_sentencias.service';

describe('Ptr_sentenciasService', () => {
  let service: Ptr_sentenciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ptr_sentenciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});