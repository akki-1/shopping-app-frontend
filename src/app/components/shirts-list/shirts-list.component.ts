import { Component, OnInit } from '@angular/core';
import { ClothingService } from 'src/app/services/clothing.service';

@Component({
  selector: 'app-shirts-list',
  templateUrl: './shirts-list.component.html',
  styleUrls: ['./shirts-list.component.css']
})
export class ShirtsListComponent implements OnInit {
  shirtsList:any[]=[]
  constructor(private clothingService:ClothingService) { }

  ngOnInit(): void {
    this.getShirtList()
  }

  public getShirtList(){

    this.clothingService.getShirts().subscribe((res)=>{
      this.shirtsList=(<any>res)
      console.log(this.shirtsList);
      
      
    })
  }

}
