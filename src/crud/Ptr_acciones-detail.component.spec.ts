import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_accionesDetailComponent} from './Ptr_acciones-detail.component';
 
describe('Ptr_accionesDetailComponent', () => {
  let component: Ptr_accionesDetailComponent;
  let fixture: ComponentFixture<Ptr_accionesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_accionesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_accionesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});