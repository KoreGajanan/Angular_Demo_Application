import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-demo',
  templateUrl: './ng-switch-demo.component.html',
  styleUrls: ['./ng-switch-demo.component.css']
})
export class NgSwitchDemoComponent implements OnInit {

  public Batch : string ="LB";
  constructor() { }
  

  ngOnInit(): void {
  }

}
