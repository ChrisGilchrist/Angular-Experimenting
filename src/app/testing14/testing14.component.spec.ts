import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing14Component } from './testing14.component';

describe('Testing14Component', () => {
  let component: Testing14Component;
  let fixture: ComponentFixture<Testing14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testing14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testing14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
