import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_proceso_tareasComponent} from './Ptr_proceso_tareas.component';
 
describe('Ptr_proceso_tareasComponent', () => {
  let component: Ptr_proceso_tareasComponent;
  let fixture: ComponentFixture<Ptr_proceso_tareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_proceso_tareasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_proceso_tareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});