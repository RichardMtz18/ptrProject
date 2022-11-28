import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_tarea_reglasComponent} from './Ptr_tarea_reglas.component';
 
describe('Ptr_tarea_reglasComponent', () => {
  let component: Ptr_tarea_reglasComponent;
  let fixture: ComponentFixture<Ptr_tarea_reglasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_tarea_reglasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_tarea_reglasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});