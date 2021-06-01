import { Component, Input, OnInit } from '@angular/core';
import { BottomPanelService, DataConnection } from '../bottom-panel.service';

@Component({
  selector: 'app-testing13',
  templateUrl: './testing13.component.html',
  styleUrls: ['./testing13.component.scss']
})
export class Testing13Component implements OnInit {

  @Input() nums = [1,2,3,4,5,6,7,8,9,10];
  @Input() inPanel = false;
  dataConnection: DataConnection;

  constructor(private bottomPanelService: BottomPanelService) { }

  ngOnInit(): void {

    console.log(this.nums);

    this.dataConnection = this.bottomPanelService.getConnection(1);
    this.dataConnection.dataSubject.subscribe(num => {
      console.log('num' + num)
      this.nums.push(num);
    });
  }

  moveToPanel(): void {
    // Get the current nums and store them in the service for the panel
    this.bottomPanelService.moveToPanel(this.nums.slice(), this.dataConnection);
  }

}
