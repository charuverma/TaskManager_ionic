import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportancePage } from './importance.page';

describe('ImportancePage', () => {
  let component: ImportancePage;
  let fixture: ComponentFixture<ImportancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
