import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-batchdetails',
  templateUrl: './ng-batchdetails.component.html',
  styleUrls: ['./ng-batchdetails.component.css']
})
export class NgBatchdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

  public batches = 
  [
    {"Name":"PPA", "Fees":9000, "Duration":"4 Months"},
    {"Name":"LB", "Fees":7500, "Duration":"4 Months"},
    {"Name":"WEB", "Fees":2500, "Duration":"3 Months"},
    {"Name":"Project", "Fees":4000, "Duration":"3 Months"},
  ];
 

}
