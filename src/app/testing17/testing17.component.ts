import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-testing17',
  templateUrl: './testing17.component.html',
  styleUrls: ['./testing17.component.scss'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
  .custom-modal .modal-content {
    padding: 10px;
    border-radius: 10px;
}`]
})
export class Testing17Component implements OnInit, AfterViewInit {

  prevX: number;
  currX: number;
  prevY: number;
  currY: number;

  faTimes = faTimes;

  test: any;

  x = "black";
  y = 2;

  dragging: boolean = false;

  @ViewChild('drawingCanvas') drawingCanvasEle: ElementRef;
  ctx: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.ctx = this.drawingCanvasEle.nativeElement.getContext("2d");
    console.log(this.ctx); 
  }

  signIn(content): void {
     this.test = this.modalService.open(content, { centered: true, windowClass: 'custom-modal' });
  }

  closeModal(): void {
    this.test.close();
  }

  @HostListener('mousemove', ['$event'])
  private mouseMove(event): void {  
    this.calculateXY(event);  
  }

  @HostListener('mousedown', ['$event'])
  private mouseDown(event): void {
    this.dragging = true;
  }

  @HostListener('mouseup', ['$event'])
  private mouseUp(event): void {
    this.dragging = false;    
  }

  @HostListener('mouseout', ['$event'])
  private mouseOut(event): void {    
  }

  private calculateXY(event): void {

    if (this.dragging) {
      this.prevX = this.currX;
      this.prevY = this.currY;
      this.currX = event.clientX - this.drawingCanvasEle.nativeElement.offsetLeft;
      this.currY = event.clientY- this.drawingCanvasEle.nativeElement.offsetTop;

      this.draw();
    }

    //console.log(this.prevX, this.prevY, this.currX, this.currY)
  }

  private draw(): void {
    this.ctx.beginPath();
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.currX, this.currY, 2, 2);
    this.ctx.closePath();
  }

}
