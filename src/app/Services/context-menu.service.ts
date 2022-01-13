import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ElementRef, Injectable } from '@angular/core';
import { ContextMenuContentComponent } from '../context-menu/context-menu-content/context-menu-content.component';

import { ContextMenuComponent } from '../context-menu/context-menu.component';

export class ContextMenuConfig {
  contextMenu: ContextMenuComponent;
  event: any;
  contextMenuItem: any;
}

@Injectable({
  providedIn: 'root'
})
export class ContextMenuService {

  exisitingOverlay: OverlayRef;

  constructor(private overlay: Overlay) { }

  show(contextMenuConfig: ContextMenuConfig): void {
 
    this.closeExistingOverlay();

    const target = {
      getBoundingClientRect: (): any => ({
        bottom: contextMenuConfig.event.clientY,
        height: 0,
        left: contextMenuConfig.event.clientX,
        right: contextMenuConfig.event.clientX,
        top: contextMenuConfig.event.clientY,
        width: 0,
      }),
    };

    const element = new ElementRef(target);
    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(element)
      .withPositions([{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top',
      }, {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom',
      }]);

    const overlayRef = this.overlay.create({
      positionStrategy: positionStrategy
    })
    this.exisitingOverlay = overlayRef;
    const compRef = overlayRef.attach(new ComponentPortal(ContextMenuContentComponent));
    compRef.instance.contextItem = contextMenuConfig.contextMenuItem;
    console.log('Component', contextMenuConfig.contextMenu)
    compRef.instance.items = contextMenuConfig.contextMenu.items;

    compRef.instance.closeAllMenus.subscribe(() => {
      console.log('Closing all menus')
      this.closeExistingOverlay();
    });
  }

  closeExistingOverlay(): void {
    if (this.exisitingOverlay) {
      this.exisitingOverlay.detach();
      this.exisitingOverlay.dispose();
      this.exisitingOverlay = null;
    }
  }
}
