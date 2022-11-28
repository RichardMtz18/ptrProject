import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_reglas_detComponent} from './Ptr_reglas_det.component';
 
describe('Ptr_reglas_detComponent', () => {
  let component: Ptr_reglas_detComponent;
  let fixture: ComponentFixture<Ptr_reglas_detComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_reglas_detComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_reglas_detComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});