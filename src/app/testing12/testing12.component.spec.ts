import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing12Component } from './testing12.component';

describe('Testing12Component', () => {
  let component: Testing12Component;
  let fixture: ComponentFixture<Testing12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testing12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testing12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
