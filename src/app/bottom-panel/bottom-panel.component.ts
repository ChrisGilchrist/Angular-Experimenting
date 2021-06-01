import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, HostListener, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { faChevronDown, faChevronUp, faColumns, faCompress, faExpand, faPlus } from '@fortawesome/free-solid-svg-icons';
import { BottomPanelService } from '../bottom-panel.service';

@Component({
  selector: 'app-tab',
  template: '<div [hidden]="!show"><ng-content></ng-content></div>',
  styleUrls: ['./bottom-panel.component.scss']
})
export class TabComponent implements OnInit, AfterViewInit {

  @Input() tabTitle: string;
  @Input() icon: string;
  @Input() iconColour: string;
  show: boolean;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

}

@Component({
  selector: 'app-bottom-panel',
  templateUrl: './bottom-panel.component.html',
  styleUrls: ['./bottom-panel.component.scss']
})
export class BottomPanelComponent implements OnInit, AfterViewInit, AfterContentInit {

  constructor(private bottomPanelService: BottomPanelService) { }

  @Input() moveableTabs: boolean = true;

  MIN_HEIGHT: number = 42;
  DEFAULT_HEIGHT: number = 300;
  @ViewChild('dragHandler') handler: ElementRef;
  @ContentChildren('tab') tabs: QueryList<TabComponent>;
  height: number = 42;
  oldY = 0;
  grabber = false;
  showPanel: boolean = false;
  fullScreen = false;
  
  placeholderWidth: number;

  selectedTab: TabComponent;

  faCompress = faCompress;
  faExpand = faExpand;
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;
  faColumns = faColumns;
  faPlus = faPlus;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  ngAfterContentInit(): void {
    //console.log(this.tabs)
    //console.log(this.tabs.toArray()[0].tabTitle);
    //this.tabs.toArray()[2].show = true;
    //this.openPanel();
  }


  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {

    if (!this.grabber) {
      return;
    }

    if (!this.showPanel) {
      // Ensure a tab is selected
      if (this.tabs.length > 0 && this.tabs.toArray().filter(x => x.show).length == 0) {
        this.tabs.toArray()[0].show = true;
      }
      this.showPanel = true;
    } 

    this.resizer(event.clientY - this.oldY);
    this.oldY = event.clientY;
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.grabber = false;
  }

  resizer(offsetY: number) {
    this.height -= offsetY;
  }

  @HostListener('document:mousedown', ['$event']) onResize(event: MouseEvent) {

    if (event.target == this.handler.nativeElement) {    
      this.grabber = true;
      this.oldY = event.clientY;
      event.preventDefault();
    }

  }

  togglePanel() {
    if (this.showPanel) {
      console.log('CLOSING')
      this.closePanel()
    } else {
      console.log('OPENING')
      this.openPanel();
    }

    //this.showPanel =! this.showPanel
  }

  openPanel() {
    this.showPanel = true;
    this.height = this.DEFAULT_HEIGHT;
  }

  closePanel() {
    this.showPanel = false;
    this.height = this.MIN_HEIGHT;
  }

  fullscreen() {
    this.fullScreen =! this.fullScreen;

    if (!this.fullScreen) {
      this.height = this.DEFAULT_HEIGHT;
      return;
    }
    this.height = document.getElementById('pageContainer').clientHeight;
    this.showPanel = true;
  }

  add() {

  }

  drop(event: CdkDragDrop<string[]>) {
    const test = this.tabs.toArray();
    moveItemInArray(test, event.previousIndex, event.currentIndex);
    this.tabs.reset(test)
  }

  cdkDragStart(event:any){
    //console.log('dfsdfs')
    this.placeholderWidth = event.source.element.nativeElement.offsetWidth
    //console.log(this.placeholderWidth)
 }

  splitView() {
    this.tabs.forEach(tab => {
      tab.show = false;
    });

    this.tabs.toArray()[0].show = true;
    this.tabs.toArray()[1].show = true;
  }

  selectTab(selectedTab: TabComponent, tabIndex: number) {
  
    const currentSelectedTabList = this.tabs.toArray().filter(x => x.show);
    if (currentSelectedTabList.length > 0 && (currentSelectedTabList[0] == selectedTab)) {
      selectedTab.show = false;
      this.closePanel();
      return;
    }
    
    this.tabs.forEach(tab => {
      tab.show = false;
    });

    selectedTab.show = true;

    if (!this.showPanel) {
      this.openPanel();
    }

    // if(tabIndex == 2) {
    //   this.bottomPanelService.getConnection(1).dataSubject.subscribe(res => {
    //     console.log('Tab 3 ' + res)
    //   });
    // }
  }


}
