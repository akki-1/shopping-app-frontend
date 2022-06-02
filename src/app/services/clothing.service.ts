import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClothingService {
  url="http://localhost:6080/list"
  constructor(private ser:HttpClient) { }


  public getTShirts(){

    return this.ser.get(`${this.url}/tshirts`);
  }

  public getShirts(){

    return this.ser.get(`${this.url}/shirts`);
  }

  public saveClothing(user){

    return this.ser.post(`${this.url}/save-clothing`,user)
  }

  public saveImage(image){

    return this.ser.post(`${this.url}/save-image`,image)
  }
}
