import { Component, OnInit } from '@angular/core';
import { DatePipe } from '../../../node_modules/@angular/common';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  IsShow: boolean = false;
  btnClickLogs = [];
  constructor() { }

  ngOnInit(): void {
  }
  onClickDetailButton() {
    let obj = {
      'clickDate': new Date(),
      'number': this.btnClickLogs.length+1,
      'isShow': this.IsShow
    };
    this.btnClickLogs.push(obj);
    this.IsShow = !this.IsShow;
  }
}
