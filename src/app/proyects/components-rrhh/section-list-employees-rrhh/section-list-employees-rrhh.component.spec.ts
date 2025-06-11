/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SectionListEmployeesRrhhComponent } from './section-list-employees-rrhh.component';

describe('SectionListEmployeesRrhhComponent', () => {
  let component: SectionListEmployeesRrhhComponent;
  let fixture: ComponentFixture<SectionListEmployeesRrhhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionListEmployeesRrhhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionListEmployeesRrhhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
