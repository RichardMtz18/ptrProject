import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_tipo_reglasComponent} from './Ptr_tipo_reglas.component';
 
describe('Ptr_tipo_reglasComponent', () => {
  let component: Ptr_tipo_reglasComponent;
  let fixture: ComponentFixture<Ptr_tipo_reglasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_tipo_reglasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_tipo_reglasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});