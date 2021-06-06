import { Component, OnInit } from '@angular/core';
import { BottomPanelService, NumPanel } from '../bottom-panel.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  numPanels = [];
  codeEditors: Number = 0;

  constructor(private bottomPanelService: BottomPanelService) { 
    this.bottomPanelService.numPanelsChange.subscribe(panels => {
      this.numPanels = panels
      console.log(this.numPanels);
    });

    this.bottomPanelService.codeEditorsChange.subscribe((codeEditors: Number) => {
      this.codeEditors = codeEditors
      console.log(this.numPanels);
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

}
