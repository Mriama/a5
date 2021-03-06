import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResComponent } from './list-res.component';

describe('ListResComponent', () => {
  let component: ListResComponent;
  let fixture: ComponentFixture<ListResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
