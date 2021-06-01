import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing4Component } from './testing4.component';

describe('Testing4Component', () => {
  let component: Testing4Component;
  let fixture: ComponentFixture<Testing4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testing4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testing4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
