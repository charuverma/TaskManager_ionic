import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemindPage } from './remind.page';

describe('RemindPage', () => {
  let component: RemindPage;
  let fixture: ComponentFixture<RemindPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemindPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemindPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
