/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AbaoutMeComponent } from './abaoutMe.component';

describe('AbaoutMeComponent', () => {
  let component: AbaoutMeComponent;
  let fixture: ComponentFixture<AbaoutMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbaoutMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbaoutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
