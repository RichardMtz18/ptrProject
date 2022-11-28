
import { TestBed } from '@angular/core/testing';

import { Ptr_tareasService } from './Ptr_tareas.service';

describe('Ptr_tareasService', () => {
  let service: Ptr_tareasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ptr_tareasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});