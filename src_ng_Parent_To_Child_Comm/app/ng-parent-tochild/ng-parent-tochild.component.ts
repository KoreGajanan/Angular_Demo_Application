import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-parent-tochild',
  templateUrl: './ng-parent-tochild.component.html',
  styleUrls: ['./ng-parent-tochild.component.css']
})
export class NgParentTochildComponent implements OnInit {

  @Input() public parentData : string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
