import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-component',
  templateUrl: './username-component.component.html',
  styleUrls: ['./username-component.component.css']
})
export class UsernameComponentComponent implements OnInit {
  Username: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  onClickCleanButton() {
    this.Username = '';
  }
}
