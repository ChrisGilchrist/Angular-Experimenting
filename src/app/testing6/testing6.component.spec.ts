import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing6Component } from './testing6.component';

describe('Testing6Component', () => {
  let component: Testing6Component;
  let fixture: ComponentFixture<Testing6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testing6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testing6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
