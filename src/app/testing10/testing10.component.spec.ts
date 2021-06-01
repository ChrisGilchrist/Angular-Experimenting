import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing10Component } from './testing10.component';

describe('Testing10Component', () => {
  let component: Testing10Component;
  let fixture: ComponentFixture<Testing10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testing10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testing10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
