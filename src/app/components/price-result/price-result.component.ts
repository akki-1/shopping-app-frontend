import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-price-result',
  templateUrl: './price-result.component.html',
  styleUrls: ['./price-result.component.css']
})
export class PriceResultComponent implements OnInit {
  amount:number;
  electronicPriceResult:any[]=[]
  clothingPriceResult:any[]=[]
  constructor(private route:ActivatedRoute,private ser:MainService) { }

  ngOnInit(): void {
    this.getPriceResult()
  }

  public getPriceResult(){

    this.route.paramMap.subscribe((res)=>{
      this.amount=+res.get("amount");
      
      this.ser.getPriceResultElectronic(this.amount).subscribe((res)=>{
        this.electronicPriceResult=(<any>res)
        console.log(res);
        
      })
      this.ser.getPriceResultClothing(this.amount).subscribe((res)=>{
        this.clothingPriceResult=(<any>res)
        console.log(res);
        
      })
      
    })
  }

}
