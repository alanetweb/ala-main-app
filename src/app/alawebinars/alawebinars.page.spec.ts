import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlawebinarsPage } from './alawebinars.page';

describe('AlawebinarsPage', () => {
  let component: AlawebinarsPage;
  let fixture: ComponentFixture<AlawebinarsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlawebinarsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlawebinarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
