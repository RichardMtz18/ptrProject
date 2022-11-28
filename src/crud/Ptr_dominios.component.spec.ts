import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_dominiosComponent} from './Ptr_dominios.component';
 
describe('Ptr_dominiosComponent', () => {
  let component: Ptr_dominiosComponent;
  let fixture: ComponentFixture<Ptr_dominiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_dominiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_dominiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});