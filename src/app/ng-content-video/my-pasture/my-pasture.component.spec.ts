/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyPastureComponent } from './my-pasture.component';

describe('MyPastureComponent', () => {
  let component: MyPastureComponent;
  let fixture: ComponentFixture<MyPastureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPastureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPastureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
