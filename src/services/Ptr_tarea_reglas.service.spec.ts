
import { TestBed } from '@angular/core/testing';

import { Ptr_tarea_reglasService } from './Ptr_tarea_reglas.service';

describe('Ptr_tarea_reglasService', () => {
  let service: Ptr_tarea_reglasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ptr_tarea_reglasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});