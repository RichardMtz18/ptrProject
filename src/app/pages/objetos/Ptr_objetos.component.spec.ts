import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_objetosComponent} from './Ptr_objetos.component';
 
describe('Ptr_objetosComponent', () => {
  let component: Ptr_objetosComponent;
  let fixture: ComponentFixture<Ptr_objetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_objetosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_objetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});