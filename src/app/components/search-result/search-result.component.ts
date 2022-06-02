import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
    clothingResult:any[]=[]
    electronicResult:any[]=[]
  constructor(private route:ActivatedRoute,private ser:MainService,private router:Router) { }
  public keyword="";
  ngOnInit(): void {
    this.getSearchResult();
  }

  public getSearchResult(){
    this.route.paramMap.subscribe((res)=>{
      this.keyword=res.get("keyword");
      if(this.keyword.trim().length<=0){
        Swal.fire(
          {
            icon:'error',
            title:'Please Enter Product Name',
            text:'For Ex. Dell or HP'
          },
        ).then((result)=>{
          if(result.value){
           this.router.navigate([""])
           
          }
         
        })
      }
      this.ser.getResult(this.keyword).subscribe((res)=>{
        this.electronicResult=(<any>res)
        console.log(res);
        
      })
      this.ser.getClothingResult(this.keyword).subscribe((res)=>{
        this.clothingResult=(<any>res)
        console.log(res);
        
      })
      
    })

    
  }
 

}
