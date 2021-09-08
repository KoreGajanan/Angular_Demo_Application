import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-binding',
  templateUrl: './ng-class-binding.component.html',
  styles: [
    `.success
    {
      color:green;
    }
    .Failure
    {
      color:red;
    }

    `
  ]
})
export class NgClassBindingComponent implements OnInit {

  public MyClass='success';
  public IsSet=true;
  constructor() { }

  ngOnInit(): void {
  }

}
