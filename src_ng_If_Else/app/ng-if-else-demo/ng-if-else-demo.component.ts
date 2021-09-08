import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-else-demo',
  templateUrl: './ng-if-else-demo.component.html',
  styleUrls: ['./ng-if-else-demo.component.css']
})
export class NgIfElseDemoComponent implements OnInit {

  // characteristics to hold batch name
  bname : string | undefined;
  str : string | undefined;

  //flag to maintain status of batch name
  flag : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  gun()
  {
    this.str = "Your entered batch name is " + this.bname;
  }
  fun(event : any)
  {
    this.flag = true;
    this.bname= (<HTMLInputElement>event.target).value;
  }

}
