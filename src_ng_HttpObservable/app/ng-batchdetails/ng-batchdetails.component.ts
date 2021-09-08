import { Component, OnInit } from '@angular/core';
import { NgBatchlistService } from '../ng-batchlist.service';

@Component({
  selector: 'app-ng-batchdetails',
  templateUrl: './ng-batchdetails.component.html',
  styleUrls: ['./ng-batchdetails.component.css']
})
export class NgBatchdetailsComponent implements OnInit {

  //Create array to hold the information of batches
  public batches : any[] = [];
  
  //Add instance of service in constructor
  constructor(private _obj : NgBatchlistService) { }

  ngOnInit() 
   {
    
    this._obj.GetBatchDetails()
    .subscribe(data=>this.batches=data);
    

  }


  

  
 

}
