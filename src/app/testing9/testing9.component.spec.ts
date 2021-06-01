import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing9Component } from './testing9.component';

describe('Testing9Component', () => {
  let component: Testing9Component;
  let fixture: ComponentFixture<Testing9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testing9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testing9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
