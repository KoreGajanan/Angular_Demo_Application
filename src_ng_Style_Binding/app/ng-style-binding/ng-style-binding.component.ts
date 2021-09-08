import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-binding',
  templateUrl: './ng-style-binding.component.html',
  styleUrls: ['./ng-style-binding.component.css']
})
export class NgStyleBindingComponent implements OnInit {

  public IsSet = true;
  public MyColor = "Orange";
  constructor() { }

  ngOnInit(): void {
  }

}
