import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_propiedadesDetailComponent} from './Ptr_propiedades-detail.component';
 
describe('Ptr_propiedadesDetailComponent', () => {
  let component: Ptr_propiedadesDetailComponent;
  let fixture: ComponentFixture<Ptr_propiedadesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_propiedadesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_propiedadesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});