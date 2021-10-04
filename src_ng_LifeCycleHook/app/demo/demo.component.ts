import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {

  constructor()
   { 
     console.log("Inside constructor");
   }

  iCounter: number=0;

  //This hook initializes data for a component.
  // After setting the input values, this hook gets its call.
  // This hook is added by default by Angular CLI to all the components.
  // It is called only for once
  ngOnInit(): void
  {
    this.iCounter=10;
    console.log("Inside ngOnInit");
  }

  // It can be utilized practically in all the components that have input.
 // Gets invoked whenever the input value gets changed.
  ngOnChanges()
  {
    console.log("Inside ngOnChanges");
  }

  //Called for change detection
  ngDoCheck()
  {
    console.log("Inside ngDoCheck");
  }

  //After ngDoCheck it is called initially. 
  ngAfterContentInit()
  {
    console.log("Inside ngAfterContentInit");
  }

  //This method waits for ngContentInit to finish its execution to get started.
 //Executed after all ngDocheck
  ngAfterContentChecked()
  {
    console.log("Inside ngAfterContentChecked");
  }

  //After the initialization of view(html file), it gets its call only for once. 
  ngAfterViewInit()
  {
    console.log("Inside ngAfterViewInit");
  }

  //After the checking and initialization are done, this gets its called.
 // After every ngAfterContentChecked method finishes its job, this method starts its work.
  ngAfterViewChecked()
  {
    console.log("Inside ngAfterViewChecked");
  }

  Increament()
  {
    this.iCounter++;
  }
  Decrement()
  {
    this.iCounter--;
  }


}
