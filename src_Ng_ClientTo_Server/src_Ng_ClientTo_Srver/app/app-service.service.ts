import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http : HttpClient)
   { }
    
   getBatches(iNo:any)
   {
      return this.http.get('app/getBaches'); //connect to server
   }
}
