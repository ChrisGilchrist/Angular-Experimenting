/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MySheepComponent } from './my-sheep.component';

describe('MySheepComponent', () => {
  let component: MySheepComponent;
  let fixture: ComponentFixture<MySheepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySheepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySheepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
