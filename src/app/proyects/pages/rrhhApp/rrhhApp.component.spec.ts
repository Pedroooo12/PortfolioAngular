/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RrhhAppComponent } from './rrhhApp.component';

describe('RrhhAppComponent', () => {
  let component: RrhhAppComponent;
  let fixture: ComponentFixture<RrhhAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RrhhAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RrhhAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
