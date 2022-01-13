import { Component, Directive, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-testing16',
  templateUrl: './testing16.component.html',
  styleUrls: ['./testing16.component.scss']
})
export class Testing16Component implements OnInit {

  logLines: Array<string> = [];

  _timer: any;
  timerSubscription: Subscription;
  interval: number = 2000;

  @ViewChild('Log') logEle: ElementRef;

  scrolled = false;
  linesSinceScrollStop: number = 0;
  message: string = 'Log paused due to scroll';

  constructor() {
    for (let i = 0; i < 500; i++) {
      this.logLines.push('Temp Line')  
    }
   }

  ngOnInit(): void {
    this._timer = timer(0, 200);
    this.timerSubscription = this._timer.subscribe(x => this.addLine());
  }

  ngAfterViewInit(): void {
    this.scrollToBottom();
  }

  scrollToBottom(): void {

    if (this.scrolled) {
      return;
    }

    const height = this.logEle.nativeElement.scrollHeight;
    this.logEle.nativeElement.scrollTo({ top: height, behavior: 'smooth' });
    console.log('Scrolled to the bottom')
  }

  //@HostListener('window:scroll', ['$event'])
  @HostListener('window:scroll', ['$event'])
  logScroll(event: any): void {
    console.log(event);
    console.log('User is scroolling rn')
    this.scrolled = true;

    if (this.logEle.nativeElement.scrollTop === (this.logEle.nativeElement.scrollHeight - this.logEle.nativeElement.offsetHeight)) {
      this.scrolled = false;
      this.linesSinceScrollStop = 0;
    }
  }

  addLine(): void {
    this.logLines.push('New Line Added');
    setTimeout(() => {this.scrollToBottom()}, 0)
    this.linesSinceScrollStop =+ 1;
  }

  increaseTimer(): void {
    this._timer = null;
    this.timerSubscription.unsubscribe();
    this.interval = this.interval / 2;
    this._timer = timer(0, this.interval);
    this.timerSubscription = this._timer.subscribe(x => this.addLine());
  }

  decreaseTimer(): void {
    this._timer = null;
    this.timerSubscription.unsubscribe();
    this.interval = this.interval * 2;
    this._timer = timer(0, this.interval);
    this.timerSubscription = this._timer.subscribe(x => this.addLine());
  }

  hovering(status: boolean): void {
    this.message = !status ? 'Log paused due to scroll' : (this.linesSinceScrollStop + ' new lines');
  }

}
