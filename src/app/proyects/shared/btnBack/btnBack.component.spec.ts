/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BtnBackComponent } from './btnBack.component';

describe('BtnBackComponent', () => {
  let component: BtnBackComponent;
  let fixture: ComponentFixture<BtnBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
