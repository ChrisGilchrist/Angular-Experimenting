import { AfterViewInit, Component, ContentChild, ContentChildren, HostListener, OnInit, QueryList } from '@angular/core';
import { ContextMenuService } from 'src/app/Services/context-menu.service';
import { ContextMenuItemDirective } from '../context-menu-item.directive';

@Component({
  selector: 'app-context-menu-content',
  templateUrl: './context-menu-content.component.html',
  styleUrls: ['./context-menu-content.component.scss']
})
export class ContextMenuContentComponent implements OnInit,AfterViewInit {

  contextItem: any;
  items: QueryList<ContextMenuItemDirective>;

  constructor(private contextMenuService: ContextMenuService) { }

  ngAfterViewInit(): void {
    console.log('Context Item Subject', this.contextItem);
    console.log('Component items', this.items);
    //console.log('First Item', this.items[0].template);
  }

  @HostListener('document:click', ['$event'])
  public closeMenu(event: MouseEvent): void {
    console.log(event.target);
    this.contextMenuService.closeExistingOverlay();
  }

  ngOnInit(): void {
  }

}
