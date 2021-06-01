import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing7Component } from './testing7.component';

describe('Testing7Component', () => {
  let component: Testing7Component;
  let fixture: ComponentFixture<Testing7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testing7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testing7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
