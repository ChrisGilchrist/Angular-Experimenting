import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing16Component } from './testing16.component';

describe('Testing16Component', () => {
  let component: Testing16Component;
  let fixture: ComponentFixture<Testing16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testing16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testing16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
