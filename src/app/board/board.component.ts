
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { DisplayGrid, GridsterConfig, GridsterItem, GridType }  from 'angular-gridster2';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BoardComponent implements OnInit {

  faCog = faCog;
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  constructor() { }

  ngOnInit(): void {

    this.options = {
      itemChangeCallback: BoardComponent.itemChange,
      itemResizeCallback: BoardComponent.itemResize,
      gridType: GridType.Fit,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
      },
      swap: false,
      pushItems: true,
      pushDirections: {north: true, east: true, south: true, west: true},
      mobileBreakpoint: 640,
      minCols: 5,
      maxCols: 100,
      minRows: 5,
      maxRows: 100,
      maxItemCols: 100,
      minItemCols: 1,
      maxItemRows: 100,
      minItemRows: 1,
      maxItemArea: 2500,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 105,
      fixedRowHeight: 105,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      enableOccupiedCellDrop: false,
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      ignoreMarginInRow: false,
      displayGrid: DisplayGrid.OnDragAndResize
    };

    this.dashboard = [
      {cols: 5, rows: 1, y: 0, x: 0},
      //{cols: 2, rows: 2, y: 0, x: 2}
    ];

  }

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    const newItem: GridsterItem = {cols: 3, rows: 1, y: 0, x: 0};
    this.dashboard.push(newItem);
  }

}
