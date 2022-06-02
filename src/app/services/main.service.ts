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

  public getElectronicList(){

    return this.ser.get(`${this.url}/electronic`);
  }

  public getClothingList(){

    return this.ser.get(`${this.url}/clothing`);
  }
  public getAllTVs(){

    return this.ser.get(`${this.url}/tvs`);
  }
  public getResult(keyword){

    return this.ser.post(`${this.url}/search/${keyword}`,keyword);
  }
  public getPriceResultElectronic(amount){

    return this.ser.get(`${this.url}/price-electronic/${amount}`);
  }
  public getClothingResult(keyword){

    return this.ser.post(`${this.url}/search-clothing/${keyword}`,keyword);
  }
  public getPriceResultClothing(amount){
    return this.ser.get(`${this.url}/price-clothing/${amount}`)
  }

  public saveElectronic(user){

    return this.ser.post(`${this.url}/save-product`,user)
  }

  public saveImage(image){

    return this.ser.post(`${this.url}/save-image`,image)
  }
}
