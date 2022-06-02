import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-clothing-list',
  templateUrl: './clothing-list.component.html',
  styleUrls: ['./clothing-list.component.css']
})
export class ClothingListComponent implements OnInit {
  clothingList:any[]=[]
  constructor(private ser:MainService) { }

  ngOnInit(): void {
    this.getClothingList();
  }

  public getClothingList(){

    this.ser.getClothingList().subscribe((res)=>{
      this.clothingList=(<any>res)
      console.log(this.clothingList);
      
      
    })
  }

}
