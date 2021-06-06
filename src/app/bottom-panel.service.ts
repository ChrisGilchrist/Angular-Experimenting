import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class NumPanel {
  nums: number[];
  conn: DataConnection;
}

export class DataConnection {
  id: number;
  dataSubject: Subject<number>;
}

@Injectable({
  providedIn: 'root'
})
export class BottomPanelService {

  dataConnections: DataConnection [] = []
  numPanels: NumPanel [] = [];
  numPanelsChange: Subject<NumPanel[]> = new Subject<NumPanel[]>();

  codeEditors = 0;
  codeEditorsChange: Subject<Number> = new Subject<Number>();

  constructor() { }

  getConnection(id): DataConnection {
    
    // Search list for existing connection
    const conn:DataConnection = this.dataConnections.filter(x => x.id == id)[0];
    if (conn) {
      return conn;
    }

    // Create new conn
    return this.createConnection(id);
  }

  moveToPanel(nums, conn): void {

    const numPanel: NumPanel = {
      nums,
      conn
    }

    this.numPanels.push(numPanel);
    this.numPanelsChange.next(this.numPanels);
  }

  createConnection(id) {

    const dataSubject = new Subject<number>();
    const dataConnection: DataConnection = {
      id,
      dataSubject,
    }
    this.dataConnections.push(dataConnection);
    this.pulseData(dataConnection);

    return dataConnection;
  }

  pulseData(conn: DataConnection) {
    // setTimeout(() => {
    //   const rndNum = Math.floor(Math.random() * 100) + 1
    //   conn.dataSubject.next(rndNum);
    //   this.pulseData(conn);
    // }, 3000);
  }

  moveCodeToBottomPanel() {
    this.codeEditors += 1;
    this.codeEditorsChange.next(this.codeEditors);
  }

}
