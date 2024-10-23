/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SectionMainJsonComponent } from './sectionMainJson.component';

describe('SectionMainJsonComponent', () => {
  let component: SectionMainJsonComponent;
  let fixture: ComponentFixture<SectionMainJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionMainJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionMainJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
