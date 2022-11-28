import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_tipo_dominiosDetailComponent} from './Ptr_tipo_dominios-detail.component';
 
describe('Ptr_tipo_dominiosDetailComponent', () => {
  let component: Ptr_tipo_dominiosDetailComponent;
  let fixture: ComponentFixture<Ptr_tipo_dominiosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_tipo_dominiosDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_tipo_dominiosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});