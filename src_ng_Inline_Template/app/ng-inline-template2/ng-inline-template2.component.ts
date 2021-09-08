import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-inline-template2',
  template: `<h1>Inside Marvellous Component : Second </h1>`,
  styleUrls: ['./ng-inline-template2.component.css']
})
export class NgInlineTemplate2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
