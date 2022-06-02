import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-electronic-list',
  templateUrl: './electronic-list.component.html',
  styleUrls: ['./electronic-list.component.css']
})
export class ElectronicListComponent implements OnInit {
  electronicList:any[]=[];
  constructor(private ser:MainService) { }

  ngOnInit(): void {
    this.getElectronicList()
  }

  public getElectronicList(){

    this.ser.getElectronicList().subscribe((res)=>{
      this.electronicList=(<any>res)
      console.log(this.electronicList);
      
      
    })
  }

}
