import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css'],
})
export class SuccessAlertComponent implements OnInit {
  username: string = '';
  isDisplay: boolean = true;
  buttonClickCount: number = 0;
  logArray: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  onReset() {
    this.username = '';
  }

  updateClickCount() {
    this.isDisplay = !this.isDisplay;
    this.buttonClickCount = this.buttonClickCount + 1;
    this.logArray.push(new Date());
    // this.logArray.push(this.buttonClickCount);
    // console.log(this.buttonClickCount);
    console.log(this.logArray);
  }
}
