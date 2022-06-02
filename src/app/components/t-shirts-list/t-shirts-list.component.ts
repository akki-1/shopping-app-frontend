import { Component, OnInit } from '@angular/core';
import { ClothingService } from 'src/app/services/clothing.service';

@Component({
  selector: 'app-t-shirts-list',
  templateUrl: './t-shirts-list.component.html',
  styleUrls: ['./t-shirts-list.component.css']
})
export class TShirtsListComponent implements OnInit {
  tShirtsList:any[]=[]
  constructor(private clothingService:ClothingService) { }

  ngOnInit(): void {
    this.getTShirtList()
  }

  public getTShirtList(){

    this.clothingService.getTShirts().subscribe((res)=>{
      this.tShirtsList=(<any>res)
      console.log(this.tShirtsList);
      
      
    })
  }

  
}
