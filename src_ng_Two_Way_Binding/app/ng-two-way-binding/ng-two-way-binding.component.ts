import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-two-way-binding',
  templateUrl: './ng-two-way-binding.component.html',
  styleUrls: ['./ng-two-way-binding.component.css']
})
export class NgTwoWayBindingComponent implements OnInit {

  public UserName = "";
  constructor() { }

  ngOnInit(): void {
  }

}
