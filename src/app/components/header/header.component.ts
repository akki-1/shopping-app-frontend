import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  keyword:string="";

  constructor() { }

  ngOnInit(): void {
    console.log(this.keyword);
    
  }
  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
 

}
