import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  keyword:string="";
  panelOpenState = false;
  isCollapsed=true;
  isCollapsed2=true;
  constructor() { }

  ngOnInit(): void {
  }

}
