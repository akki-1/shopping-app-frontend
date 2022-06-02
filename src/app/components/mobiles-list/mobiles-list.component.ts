import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-mobiles-list',
  templateUrl: './mobiles-list.component.html',
  styleUrls: ['./mobiles-list.component.css']
})
export class MobilesListComponent implements OnInit {

  constructor(private ser:MainService) { }
  public allMobileList:any[]=[]
  ngOnInit(): void {
    this.mobileList()
  }

  public mobileList(){
    this.ser.getMobilesList().subscribe((res)=>{

      this.allMobileList=(<any>res)
      
    })
  }

}
