import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-testing4',
  templateUrl: './testing4.component.html',
  styleUrls: ['./testing4.component.scss']
})
export class Testing4Component implements OnInit {

  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  constructor() { }

  items = [1,2,3,4,5,6,7,4,4,3,3];

  filterItems = [
    { opened: false, title: 'Make & Model' },
    { opened: false, title: 'Price' },
    { opened: false, title: 'Year' },
    { opened: false, title: 'Mileage' },
    { opened: false, title: 'Doors & Seats' },
    { opened: false, title: 'Features' },
    { opened: false, title: 'Features' },
    { opened: false, title: 'Features' },
    { opened: false, title: 'Features' },
    { opened: false, title: 'Features' },
    { opened: false, title: 'Features' },
    { opened: false, title: 'Features' },
    { opened: false, title: 'Features' },
    { opened: false, title: 'Features' },
  ];

  ngOnInit(): void {

  }

  public carSelected() {
    console.log('dfsfs')
  }

}
