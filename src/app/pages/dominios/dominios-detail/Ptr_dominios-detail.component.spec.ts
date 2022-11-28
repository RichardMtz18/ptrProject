import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_dominiosDetailComponent} from './Ptr_dominios-detail.component';
 
describe('Ptr_dominiosDetailComponent', () => {
  let component: Ptr_dominiosDetailComponent;
  let fixture: ComponentFixture<Ptr_dominiosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_dominiosDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_dominiosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});