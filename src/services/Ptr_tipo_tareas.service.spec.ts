
import { TestBed } from '@angular/core/testing';

import { Ptr_tipo_tareasService } from './Ptr_tipo_tareas.service';

describe('Ptr_tipo_tareasService', () => {
  let service: Ptr_tipo_tareasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ptr_tipo_tareasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});