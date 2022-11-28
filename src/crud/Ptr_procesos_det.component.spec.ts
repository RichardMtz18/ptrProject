import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_procesos_detComponent} from './Ptr_procesos_det.component';
 
describe('Ptr_procesos_detComponent', () => {
  let component: Ptr_procesos_detComponent;
  let fixture: ComponentFixture<Ptr_procesos_detComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_procesos_detComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_procesos_detComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});