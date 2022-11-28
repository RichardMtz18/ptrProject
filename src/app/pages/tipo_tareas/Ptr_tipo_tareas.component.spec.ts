import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_tipo_tareasComponent} from './Ptr_tipo_tareas.component';
 
describe('Ptr_tipo_tareasComponent', () => {
  let component: Ptr_tipo_tareasComponent;
  let fixture: ComponentFixture<Ptr_tipo_tareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_tipo_tareasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_tipo_tareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});