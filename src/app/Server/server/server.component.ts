import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId:number=1001;
  serverName:string ="Server1";
  isDisabled=this.serverName==='';
  private serverStatus ="Online";

  constructor() {
    setTimeout(()=>{},2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverName='';
    this.isDisabled=this.serverName=='';
  }

  onUpdateServerName(event:Event)
  {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getServerStaus()
  {
    return this.serverStatus;
  }

}
