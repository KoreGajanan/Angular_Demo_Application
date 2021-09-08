import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-src-ng-routing',
  templateUrl: './src-ng-routing.component.html',
  styles: [`
      h2{
        color:blue;
      }
      h3
      {
        color:green;
      }
  `]
})
export class SrcNgRoutingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
