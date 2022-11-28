import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_propiedadesComponent} from './Ptr_propiedades.component';
 
describe('Ptr_propiedadesComponent', () => {
  let component: Ptr_propiedadesComponent;
  let fixture: ComponentFixture<Ptr_propiedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_propiedadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_propiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});