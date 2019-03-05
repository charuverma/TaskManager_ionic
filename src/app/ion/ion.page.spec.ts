import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonPage } from './ion.page';

describe('IonPage', () => {
  let component: IonPage;
  let fixture: ComponentFixture<IonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
