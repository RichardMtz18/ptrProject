import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ptr_sentenciasDetailComponent} from './Ptr_sentencias-detail.component';
 
describe('Ptr_sentenciasDetailComponent', () => {
  let component: Ptr_sentenciasDetailComponent;
  let fixture: ComponentFixture<Ptr_sentenciasDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptr_sentenciasDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptr_sentenciasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});