import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-property-binding',
  templateUrl: './ng-property-binding.component.html',
  styleUrls: ['./ng-property-binding.component.css']
})
export class NgPropertyBindingComponent implements OnInit {

  public MyID="Gajanan"; // used to binf the property
  public IsSet=true;
  constructor() { }

  ngOnInit(): void {
  }

}
