import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing21Component } from './testing21.component';

describe('Testing21Component', () => {
  let component: Testing21Component;
  let fixture: ComponentFixture<Testing21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testing21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testing21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
