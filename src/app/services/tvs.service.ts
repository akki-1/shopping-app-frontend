import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TvsService {
  url="http://localhost:6080/list"
  constructor(private http:HttpClient) { }

  public getAllTVs(){

    return this.http.get(`${this.url}/tvs`);
  }
}
