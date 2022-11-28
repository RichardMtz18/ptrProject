import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_tipo_reglasDetailComponent} from './Ptr_tipo_reglas-detail.component';
 
describe('Ptr_tipo_reglasDetailComponent', () => {
  let component: Ptr_tipo_reglasDetailComponent;
  let fixture: ComponentFixture<Ptr_tipo_reglasDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_tipo_reglasDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_tipo_reglasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});