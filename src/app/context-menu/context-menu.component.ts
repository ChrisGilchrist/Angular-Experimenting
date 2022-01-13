import { AfterViewInit, Component, ContentChildren, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ContextMenuItemDirective } from './context-menu-item.directive';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent implements OnInit, AfterViewInit {

  @ContentChildren(ContextMenuItemDirective) items: QueryList<ContextMenuItemDirective>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log('Directive Items',this.items);
  }


  


}
