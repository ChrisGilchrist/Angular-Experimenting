import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing15Component } from './testing15.component';

describe('Testing15Component', () => {
  let component: Testing15Component;
  let fixture: ComponentFixture<Testing15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testing15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testing15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
