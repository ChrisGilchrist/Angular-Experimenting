import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing19Component } from './testing19.component';

describe('Testing19Component', () => {
  let component: Testing19Component;
  let fixture: ComponentFixture<Testing19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testing19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testing19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
