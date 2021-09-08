import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgBatchlistService {

  constructor() { }

  
  GetBatchDetails()
  {
    return [
      {"Name" : "PPA", "Fees" : 2000, "Duration" : "4 Months"},
      {"Name" : "LB", "Fees" : 7500, "Duration" : "5 Months"},
      {"Name" : "WEB", "Fees" : 3000, "Duration" : "3 Months"},
      {"Name" : "Project", "Fees" : 6000, "Duration" : "6 Months"},
      
    ];
  }
}
