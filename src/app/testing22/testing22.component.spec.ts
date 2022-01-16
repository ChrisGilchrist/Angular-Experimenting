import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing22Component } from './testing22.component';

describe('Testing22Component', () => {
  let component: Testing22Component;
  let fixture: ComponentFixture<Testing22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testing22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testing22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
