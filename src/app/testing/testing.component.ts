import { Component, HostListener, OnInit } from '@angular/core';
import { SpotifyService } from '../Services/spotify.service';
import { faEllipsisH, faCamera, faRedo, faUndo, faBars,
  faArrowsAltH, faLock, faStar, faCopy, faCross, faTimes, faEye, faSave } from '@fortawesome/free-solid-svg-icons';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  constructor(private spotify: SpotifyService) { }

  faEllipsisH = faEllipsisH;
  faCamera = faCamera;
  faRedo = faRedo;
  faUndo = faUndo; 
  faBars = faBars;
  faStar = faStar;
  faLock = faLock;
  faCopy = faCopy;
  faTimes = faTimes;
  faEye = faEye;
  faSave = faSave;
  faArrowsAltH = faArrowsAltH;

  sideBarOpen = false;

  listOfColors = [
    [
      '#000000',
      '#2A1A1F',
      '#764134',
      '#AD8350',
      '#AFA060',
    ],
    [
      '#264653',
      '#2A9D8F',
      '#E9C46A',
      '#F4A261',
      '#E76F51',
    ],
    [
      '#000000',
      '#14213D',
      '#FCA311',
      '#E5E5E5',
      '#FFFFFF',
    ]
  ]

  colors = [
    '#000000',
    '#2A1A1F',
    '#764134',
    '#AD8350',
    '#AFA060',
  ]

  timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century'
  ];

  ngOnInit(): void {
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch(event.code) {
      case 'Space': 
      this.generateNewColours();
    }
  }

  generateNewColours() {
    // generate a new number from 0 to length of colours array
    const randNum = Math.floor(Math.random() * this.listOfColors.length);
    this.colors = this.listOfColors[randNum];
  }

  deleteColor(color) {
    this.colors = this.colors.filter(x => x !== color);
    console.log(this.colors);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.colors, event.previousIndex, event.currentIndex);
  }




}
