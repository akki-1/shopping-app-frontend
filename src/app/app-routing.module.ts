import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatAccordion, MatExpansionModule, MatExpansionPanel, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle} from '@angular/material/expansion';
import { CdkAccordionItem, CdkAccordionModule } from '@angular/cdk/accordion';
import { LaptopsListComponent } from './components/laptops-list/laptops-list.component';
import { MobilesListComponent } from './components/mobiles-list/mobiles-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
{path:"",component:MainPageComponent},
  { path:"Laptops",component:LaptopsListComponent},
  {path:"Mobiles",component:MobilesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
          NgbModule,
       MatExpansionModule,
      CdkAccordionModule
    
   ],
  exports: [RouterModule,MatAccordion,MatExpansionModule]
})
export class AppRoutingModule { }
