import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faChevronLeft, faChevronRight, faInfo, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-testing9',
  templateUrl: './testing9.component.html',
  styleUrls: ['./testing9.component.scss']
})
export class Testing9Component implements OnInit {

  faInfo = faInfoCircle;
  faChevLeft = faChevronLeft;
  faChevRight = faChevronRight;

  constructor() { }

  ngOnInit(): void {
  }

}
