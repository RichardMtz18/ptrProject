import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_procesos_detDetailComponent} from './Ptr_procesos_det-detail.component';
 
describe('Ptr_procesos_detDetailComponent', () => {
  let component: Ptr_procesos_detDetailComponent;
  let fixture: ComponentFixture<Ptr_procesos_detDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_procesos_detDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_procesos_detDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});