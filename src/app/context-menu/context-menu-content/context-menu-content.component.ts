import { OverlayRef } from '@angular/cdk/overlay';
import { AfterViewInit, Component, ContentChild, ContentChildren, EventEmitter, HostListener, OnInit, Output, QueryList } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ContextMenuConfig, ContextMenuService } from 'src/app/Services/context-menu.service';
import { ContextMenuItemDirective } from '../context-menu-item.directive';
import { ContextMenuComponent } from '../context-menu.component';

@Component({
  selector: 'app-context-menu-content',
  templateUrl: './context-menu-content.component.html',
  styleUrls: ['./context-menu-content.component.scss']
})
export class ContextMenuContentComponent implements OnInit,AfterViewInit {

  faChevronRight = faChevronRight;

  overlayRef: OverlayRef;
  contextItem: any;
  items: QueryList<ContextMenuItemDirective>;
  @Output() public closeAllMenus: EventEmitter<{
    event: MouseEvent;
  }> = new EventEmitter();

  @Output() public showSubMenu: EventEmitter<{
    event: ContextMenuConfig;
  }> = new EventEmitter();


  @Output() public closeSubMenus: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngAfterViewInit(): void {
  }

  @HostListener('document:click', ['$event'])
  public closeMenu(event: MouseEvent): void {
    this.closeAllMenus.emit({event});
  }

  triggerSubMenu(item: ContextMenuItemDirective, event: MouseEvent): void {

    this.closeSubMenus.emit(this);

    if (!item.subMenu) {
      return;
    }

    const config: ContextMenuConfig = {
      contextMenu: item.subMenu,
      contextMenuItem: this.contextItem,
      event,
      parentContextMenu: this
    } 
    this.showSubMenu.emit(config);

  }

  ngOnInit(): void {
  }

}
