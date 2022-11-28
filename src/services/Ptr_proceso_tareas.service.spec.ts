
import { TestBed } from '@angular/core/testing';

import { Ptr_proceso_tareasService } from './Ptr_proceso_tareas.service';

describe('Ptr_proceso_tareasService', () => {
  let service: Ptr_proceso_tareasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ptr_proceso_tareasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});