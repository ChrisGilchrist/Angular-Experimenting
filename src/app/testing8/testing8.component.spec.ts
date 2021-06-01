import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing8Component } from './testing8.component';

describe('Testing8Component', () => {
  let component: Testing8Component;
  let fixture: ComponentFixture<Testing8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testing8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testing8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
