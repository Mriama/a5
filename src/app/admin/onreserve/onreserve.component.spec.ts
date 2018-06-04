import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnreserveComponent } from './onreserve.component';

describe('OnreserveComponent', () => {
  let component: OnreserveComponent;
  let fixture: ComponentFixture<OnreserveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnreserveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnreserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
