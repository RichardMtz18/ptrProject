import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_tarea_reglasDetailComponent} from './Ptr_tarea_reglas-detail.component';
 
describe('Ptr_tarea_reglasDetailComponent', () => {
  let component: Ptr_tarea_reglasDetailComponent;
  let fixture: ComponentFixture<Ptr_tarea_reglasDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_tarea_reglasDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_tarea_reglasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});