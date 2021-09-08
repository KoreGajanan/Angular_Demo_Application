import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-inline-template1',
  template: `<h1>Inside Marvellous Component : First</h1>
  <app-ng-inline-template2></app-ng-inline-template2>`,
  styleUrls: ['./ng-inline-template1.component.css']
})
export class NgInlineTemplate1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

