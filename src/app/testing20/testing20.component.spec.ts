import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing20Component } from './testing20.component';

describe('Testing20Component', () => {
  let component: Testing20Component;
  let fixture: ComponentFixture<Testing20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testing20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testing20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
