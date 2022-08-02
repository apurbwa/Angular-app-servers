import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  severId: number = 10;
  serverStatus: string = 'Offline';
  // online: string = 'green';
  // offline: string = 'red';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  serverActiveStatus() {
    return this.serverStatus;
  }
  getColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }

  // getColor() {
  //   if (this.serverStatus === 'Online') {
  //     return this.online;
  //   } else return this.offline;
  // }

  ngOnInit(): void {}
}
