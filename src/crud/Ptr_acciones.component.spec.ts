import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_accionesComponent} from './Ptr_acciones.component';
 
describe('Ptr_accionesComponent', () => {
  let component: Ptr_accionesComponent;
  let fixture: ComponentFixture<Ptr_accionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_accionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_accionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});