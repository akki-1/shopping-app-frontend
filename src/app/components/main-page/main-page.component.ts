import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  allList:any[]=[]
  allClothingList:any[]=[]
  tvsList:any[]=[]
  constructor(private ser:MainService) { }

  ngOnInit(): void {
    this.allElectronicList()
    this.getAllClothingList()
    this.getAllTVs()
  }

public allElectronicList(){

  this.ser.getElectronicList().subscribe((res)=>{
    this.allList=(<any>res);
    console.log(this.allList);
    
  })
}

public getAllClothingList(){
  this.ser.getClothingList().subscribe((res)=>{
    this.allClothingList=(<any>res)
  })
}

public getAllTVs(){
  this.ser.getAllTVs().subscribe((res)=>{
    this.tvsList=(<any>res);
    console.log(this.tvsList);
    
  })

}

}
