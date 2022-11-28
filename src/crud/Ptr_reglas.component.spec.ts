import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_reglasComponent} from './Ptr_reglas.component';
 
describe('Ptr_reglasComponent', () => {
  let component: Ptr_reglasComponent;
  let fixture: ComponentFixture<Ptr_reglasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_reglasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_reglasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});