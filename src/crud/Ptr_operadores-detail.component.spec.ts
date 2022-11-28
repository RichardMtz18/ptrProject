import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_operadoresDetailComponent} from './Ptr_operadores-detail.component';
 
describe('Ptr_operadoresDetailComponent', () => {
  let component: Ptr_operadoresDetailComponent;
  let fixture: ComponentFixture<Ptr_operadoresDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_operadoresDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_operadoresDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});