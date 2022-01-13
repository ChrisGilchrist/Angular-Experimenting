import { Directive, EventEmitter, Output, TemplateRef } from '@angular/core';
import { ContextMenuService } from '../Services/context-menu.service';

@Directive({
  selector: '[contextMenuItem]'
})
export class ContextMenuItemDirective {

  @Output() public emitEvent: EventEmitter<any> = new EventEmitter();

  constructor(public template: TemplateRef<{ item: any }>, private contextMenuService: ContextMenuService) { }

  triggerExecute(event, item): void {
    this.emitEvent.emit({ event, item });

    // Close the overlay after calling this
    this.contextMenuService.closeExistingOverlay();
  }

}
