import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-inlinecss',
  template: `
              <h2>Educating For Better Tomorrow</h2>
              <h3>Pre-Placement Activity</h3>
              <h3>Logic Building</h3>
              <h3>Web Development</h3>
              <h3>Industrial Project Development</h3>
          `,
  styles: [`
                h2{
                  color: orange;
                }
                h3{
                  color: green ;
                }


  
  `]
})
export class NgInlinecssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
