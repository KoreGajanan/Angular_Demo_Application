import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-forindex-demo',
  templateUrl: './ng-forindex-demo.component.html',
  styleUrls: ['./ng-forindex-demo.component.css']
})
export class NgForindexDemoComponent implements OnInit {

  sarr:any[] = [];
  sname:any;

  AddStudent()
  {
    this.sarr.push(this.sname)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
