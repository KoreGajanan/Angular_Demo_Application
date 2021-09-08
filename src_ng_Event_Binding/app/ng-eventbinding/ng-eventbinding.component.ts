import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-eventbinding',
  templateUrl: './ng-eventbinding.component.html',
  styleUrls: ['./ng-eventbinding.component.css']
})
export class NgEventbindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public str : string = "";

  public MarvellousEvent()
  {
    console.log("Button pressed");
  }

  public MarvellousNewEvent()
  {
    this.str="Button clicked";
  }

  public MarvellousEventInfo(value : any)
  {
    console.log(value);
  }

}
