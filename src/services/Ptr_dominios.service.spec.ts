
import { TestBed } from '@angular/core/testing';

import { Ptr_dominiosService } from './Ptr_dominios.service';

describe('Ptr_dominiosService', () => {
  let service: Ptr_dominiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ptr_dominiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});