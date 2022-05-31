import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-laptops-list',
  templateUrl: './laptops-list.component.html',
  styleUrls: ['./laptops-list.component.css']
})
export class LaptopsListComponent implements OnInit {

  constructor(private ser:MainService) { }
  laptopList:any []=[];
  ngOnInit(): void {

    this.getLaptopList()
  }

  public getLaptopList(){

    this.ser.getLaptopsList().subscribe((res)=>{
      this.laptopList=(<any>res)
      console.log(this.laptopList);
      
      
    })
  }

}
