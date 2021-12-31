import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  IsServerCreated: boolean = false;
  serverCreationStatus = 'No server was created!';
  ServerName = '';
  Servers = ['Test Server', 'Development Server', 'Production Server'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }
  onCreateServer() {
    this.IsServerCreated = true;
    this.Servers.push(this.ServerName);
    this.serverCreationStatus = 'Server was created!';
  }
  onUpdateServerName(event: Event) {
    this.ServerName = (<HTMLInputElement>event.target).value;
  }
}
