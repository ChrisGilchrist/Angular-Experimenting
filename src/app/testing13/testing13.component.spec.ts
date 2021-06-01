import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing13Component } from './testing13.component';

describe('Testing13Component', () => {
  let component: Testing13Component;
  let fixture: ComponentFixture<Testing13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testing13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testing13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
