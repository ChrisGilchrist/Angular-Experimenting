import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing11Component } from './testing11.component';

describe('Testing11Component', () => {
  let component: Testing11Component;
  let fixture: ComponentFixture<Testing11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testing11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testing11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
