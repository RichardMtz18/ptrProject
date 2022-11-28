import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_objetosDetailComponent} from './Ptr_objetos-detail.component';
 
describe('Ptr_objetosDetailComponent', () => {
  let component: Ptr_objetosDetailComponent;
  let fixture: ComponentFixture<Ptr_objetosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_objetosDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_objetosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});