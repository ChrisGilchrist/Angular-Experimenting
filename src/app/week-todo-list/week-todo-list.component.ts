import { Component, OnInit } from '@angular/core';


export interface Day {
  dayName: string;
  todoList: Array<string>;
}

@Component({
  selector: 'app-week-todo-list',
  templateUrl: './week-todo-list.component.html',
  styleUrls: ['./week-todo-list.component.scss']
})
export class WeekTodoListComponent implements OnInit {

  constructor() { }

  weekDays:Array<Day> = [
    {
      dayName: 'Monday',
      todoList: [ 'Item 1', 'Item 2' ]
    },
    {
      dayName: 'Tuesday',
      todoList: [ 'Item 1', 'Item 2' ]
    },
    {
      dayName: 'Wednesday',
      todoList: [ 'Item 1', 'Item 2' ]
    },
    {
      dayName: 'Thursday',
      todoList: [ 'Item 1', 'Item 2' ]
    },
    {
      dayName: 'Friday',
      todoList: [ 'Item 1', 'Item 2' ]
    },
    {
      dayName: 'Saturday',
      todoList: [ 'Item 1', 'Item 2' ]
    },
    {
      dayName: 'Sunday',
      todoList: [ 'Item 1', 'Item 2' ]
    }
  ]

  ngOnInit(): void {
  }

  handleProductClick(event) {

  }

}
