import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { faChevronCircleLeft, faChevronCircleRight, faChevronLeft, faTimesCircle, faChevronRight, faStar as faFullStar, faCaretUp, faCaretDown, faInfoCircle, faChevronCircleUp, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-testing14',
  templateUrl: './testing14.component.html',
  styleUrls: ['./testing14.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Testing14Component implements OnInit {

  faChevronLeft = faChevronCircleLeft;
  faChevronRight = faChevronCircleRight;
  faStar = faStar;
  faFullStar = faFullStar;
  faTimes = faTimesCircle;
  faCaretUp = faCaretUp;
  faCaretDown = faCaretDown;
  faInfoCircle = faInfoCircle;

  mouseDown = false;
  startX: any;
  scrollLeft: any;

  items = []

  cryptoItems = [
    { name: 'item 1' },
    { name: 'item 1' },
    { name: 'item 1' },
    { name: 'item 1' },
    { name: 'item 1' },
  ]

  selectedCryptoItem = this.cryptoItems[0];

  colOneSortUp = false;
  colTwoSortUp = false;
  colThreeSortUp = false;
  colFourSortUp = false;

  @ViewChild('scrollContainer') scrollContainer: ElementRef;
  @ViewChild('normalSearch') normalSearch: ElementRef;
  @ViewChild('popupSearch') popupSearch: ElementRef;

  constructor() {

    for (let i = 0; i < 50; i++) {

      const test = {
        favourited: false,
        rowItem1: 'Hello1',
        rowItem2: 'Hello2',
        rowItem3: 'Hello3',
        rowItem4: Math.floor(Math.random() * 100) + 1,
      };  

      this.items.push({...test});
    }

   }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.mouseDown) {return};

    const x = event.pageX - this.scrollContainer.nativeElement.offsetLeft;
    const scroll = x - this.startX;
    this.scrollContainer.nativeElement.scrollLeft = this.scrollLeft - scroll;
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.mouseDown = false;
    this.scrollContainer.nativeElement.classList.add("smooth-scroll");
  }

  @HostListener('document:mousedown', ['$event']) 
  onMouseDown(event: MouseEvent) {

    this.scrollContainer.nativeElement.classList.remove("smooth-scroll");

    // If the target is the scroll container then we can scroll it
    if (event.target == this.scrollContainer.nativeElement || this.scrollContainer.nativeElement.contains(event.target)) {    
     this.mouseDown = true;
     this.startX = event.pageX - this.scrollContainer.nativeElement.offsetLeft;
     this.scrollLeft = this.scrollContainer.nativeElement.scrollLeft;
     event.preventDefault();
    }

  }

  @HostListener('document:keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    console.log(event);
    event.preventDefault();
    if (event.key == '/') {

      if (this.popupSearch.nativeElement.classList.contains('d-block')) {
        this.popupSearch.nativeElement.classList.remove('d-block');
        this.popupSearch.nativeElement.classList.add('d-none');
      } else {
        this.popupSearch.nativeElement.classList.add('d-block');
        this.popupSearch.nativeElement.classList.remove('d-none');
      }
    } 

  }

  ngOnInit(): void {
  }

  scrollListLeft(event): void {
    event.preventDefault();
    this.scrollContainer.nativeElement.scrollTo({
      top:0,
      left: this.scrollContainer.nativeElement.scrollLeft -= 600,
      behavior: 'smooth'
    })
  }

  scrollListRight(event): void {
    event.preventDefault();
    console.log(this.scrollContainer.nativeElement.scrollLeft);
    
    this.scrollContainer.nativeElement.scrollTo({
      top:0,
      left: this.scrollContainer.nativeElement.scrollLeft += 600,
      behavior: 'smooth'
    })
  }

}
