/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JsonAppComponent } from './jsonApp.component';

describe('JsonAppComponent', () => {
  let component: JsonAppComponent;
  let fixture: ComponentFixture<JsonAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
