import { Component, OnInit } from '@angular/core';
import { NgBatchlistService } from '../ng-batchlist.service';

@Component({
  selector: 'app-ng-batchlist',
  templateUrl: './ng-batchlist.component.html',
  styleUrls: ['./ng-batchlist.component.css']
})
export class NgBatchlistComponent implements OnInit {

  public batches : any[] = [];
  constructor(private _obj : NgBatchlistService) { }

  ngOnInit(): void {
    this.batches = this._obj.GetBatchDetails();
  }

  

}
