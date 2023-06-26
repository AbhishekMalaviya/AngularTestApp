import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styles:[`.blue{color:white}`]
})
export class Assignment3Component implements OnInit {

  Display:boolean=true;
  Logs = [];
  constructor() { }

  ngOnInit(): void {
  }

  onDisplayClick()
  {
    this.Display=!this.Display;
    this.Logs.push(this.Logs.length+1);
  }
  getColor()
  {
    return this.Logs.length>4?"blue":"black";
  }

}
