import { Component, OnInit } from '@angular/core';
import { TvsService } from 'src/app/services/tvs.service';

@Component({
  selector: 'app-tvs-list',
  templateUrl: './tvs-list.component.html',
  styleUrls: ['./tvs-list.component.css']
})
export class TvsListComponent implements OnInit {
  tvsList:any[]=[]
  constructor(private service:TvsService) { }

  ngOnInit(): void {
    this.getAllTVs();
  }

  public getAllTVs(){
    this.service.getAllTVs().subscribe((res)=>{
      this.tvsList=(<any>res);
      console.log(this.tvsList);
      
    })

  }

}
