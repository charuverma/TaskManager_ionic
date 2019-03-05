import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDayPage } from './my-day.page';

describe('MyDayPage', () => {
  let component: MyDayPage;
  let fixture: ComponentFixture<MyDayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
