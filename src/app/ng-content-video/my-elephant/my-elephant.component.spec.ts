import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyElephantComponent } from './my-elephant.component';

describe('MyElephantComponent', () => {
  let component: MyElephantComponent;
  let fixture: ComponentFixture<MyElephantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyElephantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyElephantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
