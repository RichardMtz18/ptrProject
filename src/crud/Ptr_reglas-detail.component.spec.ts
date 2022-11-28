import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_reglasDetailComponent} from './Ptr_reglas-detail.component';
 
describe('Ptr_reglasDetailComponent', () => {
  let component: Ptr_reglasDetailComponent;
  let fixture: ComponentFixture<Ptr_reglasDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_reglasDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_reglasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});