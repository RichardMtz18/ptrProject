
import { TestBed } from '@angular/core/testing';

import { Ptr_procesos_detService } from './Ptr_procesos_det.service';

describe('Ptr_procesos_detService', () => {
  let service: Ptr_procesos_detService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ptr_procesos_detService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});