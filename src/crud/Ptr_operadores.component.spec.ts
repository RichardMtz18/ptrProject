import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_operadoresComponent} from './Ptr_operadores.component';
 
describe('Ptr_operadoresComponent', () => {
  let component: Ptr_operadoresComponent;
  let fixture: ComponentFixture<Ptr_operadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_operadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_operadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});