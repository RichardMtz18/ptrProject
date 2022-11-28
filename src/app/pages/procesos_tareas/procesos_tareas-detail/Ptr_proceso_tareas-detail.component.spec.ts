import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_proceso_tareasDetailComponent} from './Ptr_proceso_tareas-detail.component';
 
describe('Ptr_proceso_tareasDetailComponent', () => {
  let component: Ptr_proceso_tareasDetailComponent;
  let fixture: ComponentFixture<Ptr_proceso_tareasDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_proceso_tareasDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_proceso_tareasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});