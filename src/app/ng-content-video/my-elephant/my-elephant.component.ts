import { Component, OnInit } from '@angular/core';

let instances = 0;

@Component({
  selector: 'my-elephant',
  templateUrl: './my-elephant.component.html',
  styleUrls: ['./my-elephant.component.scss']
})
export class MyElephantComponent implements OnInit {

  count: number;

  constructor() {
    this.count = ++instances;
   }

  ngOnInit(): void {
  }

}
