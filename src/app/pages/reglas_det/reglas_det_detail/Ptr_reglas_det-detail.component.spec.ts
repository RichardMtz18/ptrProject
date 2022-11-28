import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_reglas_detDetailComponent} from './Ptr_reglas_det-detail.component';
 
describe('Ptr_reglas_detDetailComponent', () => {
  let component: Ptr_reglas_detDetailComponent;
  let fixture: ComponentFixture<Ptr_reglas_detDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_reglas_detDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_reglas_detDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});