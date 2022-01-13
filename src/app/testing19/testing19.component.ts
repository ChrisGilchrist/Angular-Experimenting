import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-testing19',
  templateUrl: './testing19.component.html',
  styleUrls: ['./testing19.component.scss']
})
export class Testing19Component implements OnInit {

  faArrowLeft = faArrowLeft;
  faTimes = faTimes;

  plots = [
    {
      title: 'Town Hall',
      x: 200,
      y: 400,
      img: 'https://s48-en.ikariam.gameforge.com/skin/img/city/barracks_animated_r.png',
      imgHover: 'https://gf2.geo.gfsrv.net/cdnd1/f70d31e4a1664077176bd8c7eee63c.png',
      hovered: false
    },
    {
      title: 'Barracks',
      x: 400,
      y: 400,
      img: 'https://s48-en.ikariam.gameforge.com/skin/img/city/barracks_animated_r.png',
      imgHover: 'https://gf2.geo.gfsrv.net/cdnd1/f70d31e4a1664077176bd8c7eee63c.png',
      hovered: false
    },
    {
      title: 'Academy',
      x: 600,
      y: 400,
      img: 'https://s48-en.ikariam.gameforge.com/skin/img/city/barracks_animated_r.png',
      imgHover: 'https://gf2.geo.gfsrv.net/cdnd1/f70d31e4a1664077176bd8c7eee63c.png',
      hovered: false
    },
    {
      title: 'Shipping Port',
      x: 1800,
      y: 1800,
      img: 'https://s48-en.ikariam.gameforge.com/skin/img/city/barracks_animated_r.png',
      imgHover: 'https://gf2.geo.gfsrv.net/cdnd1/f70d31e4a1664077176bd8c7eee63c.png',
      hovered: false
    },
    {
      title: 'Empty Plot',
      x: 500,
      y: 500,
      img: 'https://s48-en.ikariam.gameforge.com/skin/img/city/baustelle_land_rot.png',
      imgHover: 'https://gf1.geo.gfsrv.net/cdn39/233dd7ff627a0b376a2b2a72562c00.png',
      hovered: false
    },
  ]
  showPopup: boolean = false;

  dragging: boolean = false;
  pos = { top: 0, left: 0, x: 0, y: 0 };

  @ViewChild('Map') mapElement: ElementRef;

  imgSrc = 'https://s48-en.ikariam.gameforge.com/skin/img/city/barracks_animated_r.png';

  constructor() { }

  ngOnInit(): void {
    this.generateEmptyPlots();
  }

  mapMouseDown(event): void {
    console.log('down', event)

    this.pos = {
      // The current scroll
      left: this.mapElement.nativeElement.scrollLeft,
      top: this.mapElement.nativeElement.scrollTop,
      // Get the current mouse position
      x: event.clientX,
      y: event.clientY,
    };
    console.log('mose Dwon', this.pos)

    // We have started dragging
    this.dragging = true;
  }

  mapMouseUp(event): void {
    console.log('up', event)

    // We have stopped dragging
    this.dragging = false;
  }

  mapMouseMove(event): void {
    
    // If we are dragging, move the scroll based on the new location
    if (this.dragging) {
      // Calculate the new location
      // How far the mouse has been moved
      const dx = event.clientX - this.pos.x;
      const dy = event.clientY - this.pos.y;
  
      console.log('Mouse Move', event);
            
      console.log('Scroll Top',  this.pos.top - dy);
      console.log('Scroll Left', this.pos.left - dx);

      // Scroll the element
      this.mapElement.nativeElement.scrollTop = this.pos.top - dy;
      this.mapElement.nativeElement.scrollLeft = this.pos.left - dx;

      console.log('New Scroll Left', this.mapElement.nativeElement.scrollLeft);
    }
  
  }

  openPopup(): void {
    this.showPopup = true;
  }

  closePopup(): void {
    this.showPopup = false;
  }

  generateEmptyPlots(): void {
    
    for (let i = 0; i < 20; i++) {
      const coords = this.generateCoords();

      // TODO - Ensure there are no items that this new plot would overlap with

      this.plots.push(
        {
          title: 'Empty Plot',
          x: coords.x,
          y: coords.y,
          img: 'https://s48-en.ikariam.gameforge.com/skin/img/city/baustelle_land_rot.png',
          imgHover: 'https://gf1.geo.gfsrv.net/cdn39/233dd7ff627a0b376a2b2a72562c00.png',
          hovered: false
        },
      )
    }
    
  }

  generateCoords(): { x, y } {
    const x = Math.floor(Math.random() * 1900) + 1;
    const y = Math.floor(Math.random() * 1900) + 1;
    return { x, y };
  } 

}
