import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_tipo_tareasDetailComponent} from './Ptr_tipo_tareas-detail.component';
 
describe('Ptr_tipo_tareasDetailComponent', () => {
  let component: Ptr_tipo_tareasDetailComponent;
  let fixture: ComponentFixture<Ptr_tipo_tareasDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_tipo_tareasDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_tipo_tareasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});