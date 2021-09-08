import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBatches } from './batches';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgBatchlistService {

  constructor(private http : HttpClient) 
  {

  }

  private _url : string = "/assets/Data/Batches.json";

  //write method in service class which returns array of batch details

  GetBatchDetails():Observable<IBatches[]>
  {
    return this.http.get<IBatches[]>(this._url);
  }
  
}
