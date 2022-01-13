import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing17Component } from './testing17.component';

describe('Testing17Component', () => {
  let component: Testing17Component;
  let fixture: ComponentFixture<Testing17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testing17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testing17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
