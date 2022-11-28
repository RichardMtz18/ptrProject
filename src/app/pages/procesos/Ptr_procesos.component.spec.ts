import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_procesosComponent} from './Ptr_procesos.component';
 
describe('Ptr_procesosComponent', () => {
  let component: Ptr_procesosComponent;
  let fixture: ComponentFixture<Ptr_procesosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_procesosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_procesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});