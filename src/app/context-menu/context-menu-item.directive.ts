import { Directive, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { ContextMenuService } from '../Services/context-menu.service';
import { ContextMenuComponent } from './context-menu.component';

@Directive({
  selector: '[contextMenuItem]'
})
export class ContextMenuItemDirective {

  @Input() subMenu: ContextMenuComponent;
  @Output() public emitEvent: EventEmitter<any> = new EventEmitter();

  constructor(public template: TemplateRef<{ item: any }>, private contextMenuService: ContextMenuService) { }

  triggerExecute(event, item): void {
    this.emitEvent.emit({ event, item });

    // Close the overlay after calling this
    this.contextMenuService.closeAllExistingOverlays();
  }

}
