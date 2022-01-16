import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ElementRef, Injectable, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ContextMenuContentComponent } from '../context-menu/context-menu-content/context-menu-content.component';

import { ContextMenuComponent } from '../context-menu/context-menu.component';

export class ContextMenuConfig {
  contextMenu: ContextMenuComponent;
  event: any;
  contextMenuItem: any;
  parentContextMenu: ContextMenuContentComponent
}

@Injectable({
  providedIn: 'root'
})
export class ContextMenuService implements OnDestroy {

  overlays: OverlayRef[] = [];
  showSubMenu: Subject<any> = new Subject<any>();

  subscriptions: Subscription = new Subscription();

  constructor(private overlay: Overlay) { }

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }


  /**
   * Creates the new context menu
   * 
   * @param contextMenuConfig 
   */
  show(contextMenuConfig: ContextMenuConfig): void {
 
    let overlayRef: any;
    let compRef: any;

    if (contextMenuConfig.parentContextMenu) {
      console.log('Creating a new sub context menu', contextMenuConfig);

      const element = new ElementRef(event.target);
      const positionStrategy = this.overlay.position()
        .flexibleConnectedTo(element)
        .withPositions([{
          originX: 'end',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'top',
        }, {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom',
        }]);
  
      overlayRef = this.overlay.create({
        positionStrategy: positionStrategy
      })
      this.overlays.push(overlayRef);
      compRef = overlayRef.attach(new ComponentPortal(ContextMenuContentComponent));
      compRef.instance.contextItem = contextMenuConfig.contextMenuItem;
      compRef.instance.items = contextMenuConfig.contextMenu.items;
      compRef.instance.overlayRef = overlayRef;

    } else {
      console.log('Creating a normal context menu', contextMenuConfig);
      
      this.closeAllExistingOverlays();
      
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
  
      overlayRef = this.overlay.create({
        positionStrategy: positionStrategy
      })
      this.overlays.push(overlayRef);
      compRef = overlayRef.attach(new ComponentPortal(ContextMenuContentComponent));
      compRef.instance.contextItem = contextMenuConfig.contextMenuItem;
      console.log('Component', contextMenuConfig.contextMenu)
      compRef.instance.items = contextMenuConfig.contextMenu.items;
      compRef.instance.overlayRef = overlayRef;
    }


    // Subscriptions for the newly created component
    this.subscriptions.add(
      compRef.instance.closeAllMenus.subscribe(() => {
        console.log('Closing all menus')
        this.closeAllExistingOverlays();
      })
    );

    this.subscriptions.add(
      compRef.instance.showSubMenu.subscribe((e) => {
        console.log('Show the sub menu for this item')
        this.showSubMenu.next(e);
      })
    );

    this.subscriptions.add(
      compRef.instance.closeSubMenus.subscribe((e) => {
        console.log('Close all sub menus')
        this.clearSubMenus(e);
      })
    );

  }

  /**
   * Clears all existing overlays. Useful when the user clicks etc..
   */
   closeAllExistingOverlays(): void {
    this.overlays.forEach(x => {
      x.detach();
      x.dispose();
    });
    this.overlays = [];
  }


  /**
   * Clears all the menus (overlays) created after the current item
   * @param parentContextMenu
   */
  clearSubMenus(parentContextMenu: ContextMenuContentComponent): void {
    const index = this.overlays.indexOf(parentContextMenu.overlayRef);
    this.overlays.slice(index + 1).forEach(x => {
      x.detach();
      x.dispose();
    });    
  }
}
