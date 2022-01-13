import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing18Component } from './testing18.component';

describe('Testing18Component', () => {
  let component: Testing18Component;
  let fixture: ComponentFixture<Testing18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testing18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testing18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
