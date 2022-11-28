import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_tipo_de_datosDetailComponent} from './Ptr_tipo_de_datos-detail.component';
 
describe('Ptr_tipo_de_datosDetailComponent', () => {
  let component: Ptr_tipo_de_datosDetailComponent;
  let fixture: ComponentFixture<Ptr_tipo_de_datosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_tipo_de_datosDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_tipo_de_datosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});