import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing5Component } from './testing5.component';

describe('Testing5Component', () => {
  let component: Testing5Component;
  let fixture: ComponentFixture<Testing5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testing5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testing5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
