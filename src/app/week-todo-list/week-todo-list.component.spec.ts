import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekTodoListComponent } from './week-todo-list.component';

describe('WeekTodoListComponent', () => {
  let component: WeekTodoListComponent;
  let fixture: ComponentFixture<WeekTodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekTodoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
