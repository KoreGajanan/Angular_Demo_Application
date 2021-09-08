import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template-ref-var',
  templateUrl: './ng-template-ref-var.component.html',
  styleUrls: ['./ng-template-ref-var.component.css']
})
export class NgTemplateRefVarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public AcceptData(value : any)
  {
    console.log(value);
  }

}
