import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_sentenciasComponent} from './Ptr_sentencias.component';
 
describe('Ptr_sentenciasComponent', () => {
  let component: Ptr_sentenciasComponent;
  let fixture: ComponentFixture<Ptr_sentenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_sentenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_sentenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});