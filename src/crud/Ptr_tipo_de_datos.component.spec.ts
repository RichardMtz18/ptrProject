import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_tipo_de_datosComponent} from './Ptr_tipo_de_datos.component';
 
describe('Ptr_tipo_de_datosComponent', () => {
  let component: Ptr_tipo_de_datosComponent;
  let fixture: ComponentFixture<Ptr_tipo_de_datosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_tipo_de_datosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_tipo_de_datosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});