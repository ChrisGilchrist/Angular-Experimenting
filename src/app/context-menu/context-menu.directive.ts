import { Directive, HostListener, Input } from '@angular/core';
import { ContextMenuService } from '../Services/context-menu.service';
import { ContextMenuComponent } from './context-menu.component';

@Directive({
  selector: '[contextMenu]'
})
export class ContextMenuDirective {

  @Input() contextItem: any;
  @Input() contextMenu: ContextMenuComponent;

  constructor(private contextMenuService: ContextMenuService) {
   }

  @HostListener('contextmenu', ['$event'])
  public onContextMenu(): void {
    this.contextMenuService.show(
      {
        contextMenu: this.contextMenu,
        event: event,
        contextMenuItem: this.contextItem
      }
    );
    event.stopPropagation();
    event.preventDefault();
  }

}
