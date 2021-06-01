import { Component, OnInit } from '@angular/core';

let instances = 0;

@Component({
  selector: 'my-sheep',
  templateUrl: './my-sheep.component.html',
  styleUrls: ['./my-sheep.component.scss']
})
export class MySheepComponent implements OnInit {

  count: number;
  
  constructor() {
    this.count = ++instances;
   }

  ngOnInit() {
  }

}
