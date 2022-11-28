import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_procesosDetailComponent} from './Ptr_procesos-detail.component';
 
describe('Ptr_procesosDetailComponent', () => {
  let component: Ptr_procesosDetailComponent;
  let fixture: ComponentFixture<Ptr_procesosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_procesosDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_procesosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});