import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
url="http://localhost:6080/list"
  constructor(private ser:HttpClient) { }

  public getMobilesList(){

    return this.ser.get(`${this.url}/mobiles`);
  }

  public getLaptopsList(){

    return this.ser.get(`${this.url}/laptop`);
  }
}
