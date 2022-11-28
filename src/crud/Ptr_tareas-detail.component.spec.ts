import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_tareasDetailComponent} from './Ptr_tareas-detail.component';
 
describe('Ptr_tareasDetailComponent', () => {
  let component: Ptr_tareasDetailComponent;
  let fixture: ComponentFixture<Ptr_tareasDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_tareasDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_tareasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});