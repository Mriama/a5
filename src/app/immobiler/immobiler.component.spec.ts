import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmobilerComponent } from './immobiler.component';

describe('ImmobilerComponent', () => {
  let component: ImmobilerComponent;
  let fixture: ComponentFixture<ImmobilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmobilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmobilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
