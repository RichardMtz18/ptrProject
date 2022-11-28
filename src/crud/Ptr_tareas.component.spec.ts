import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_tareasComponent} from './Ptr_tareas.component';
 
describe('Ptr_tareasComponent', () => {
  let component: Ptr_tareasComponent;
  let fixture: ComponentFixture<Ptr_tareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_tareasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_tareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});