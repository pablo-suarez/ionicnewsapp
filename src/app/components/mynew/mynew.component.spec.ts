import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MynewComponent } from './mynew.component';

describe('MynewComponent', () => {
  let component: MynewComponent;
  let fixture: ComponentFixture<MynewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MynewComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MynewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
