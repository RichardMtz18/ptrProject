
import { TestBed } from '@angular/core/testing';

import { Ptr_reglasService } from './Ptr_reglas.service';

describe('Ptr_reglasService', () => {
  let service: Ptr_reglasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ptr_reglasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});