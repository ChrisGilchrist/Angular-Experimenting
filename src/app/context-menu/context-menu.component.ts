import { AfterViewInit, Component, ContentChildren, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ContextMenuConfig, ContextMenuService } from '../Services/context-menu.service';
import { ContextMenuItemDirective } from './context-menu-item.directive';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent implements OnInit, AfterViewInit {

  @ContentChildren(ContextMenuItemDirective) items: QueryList<ContextMenuItemDirective>;

  constructor(private contextMenuService: ContextMenuService) {
    this.contextMenuService.showSubMenu.subscribe((x) => {
      this.showSubMenu(x);
    });
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //console.log('Directive Items',this.items);
  }


  showSubMenu(x: ContextMenuConfig): void {

    // Dont do anything if this is the right component
    if (x.contextMenu !== this) {
      return;
    }

    this.contextMenuService.clearSubMenus(x.parentContextMenu);

    // Show the menu as usual
    this.contextMenuService.show({
      contextMenu: this,
      event: x.event,
      parentContextMenu: x.parentContextMenu,
      contextMenuItem: x.contextMenuItem
    })

  }


  


}
