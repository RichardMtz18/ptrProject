import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_tipo_dominiosComponent} from './Ptr_tipo_dominios.component';
 
describe('Ptr_tipo_dominiosComponent', () => {
  let component: Ptr_tipo_dominiosComponent;
  let fixture: ComponentFixture<Ptr_tipo_dominiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_tipo_dominiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_tipo_dominiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});