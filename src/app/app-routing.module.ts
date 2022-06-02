import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatAccordion, MatExpansionModule, MatExpansionPanel, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
import { CdkAccordionItem, CdkAccordionModule } from '@angular/cdk/accordion';
import { LaptopsListComponent } from './components/laptops-list/laptops-list.component';
import { MobilesListComponent } from './components/mobiles-list/mobiles-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ElectronicListComponent } from './components/electronic-list/electronic-list.component';
import { TShirtsListComponent } from './components/t-shirts-list/t-shirts-list.component';
import { ShirtsListComponent } from './components/shirts-list/shirts-list.component';
import { ClothingListComponent } from './components/clothing-list/clothing-list.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { FormsModule } from '@angular/forms';
import { PriceResultComponent } from './components/price-result/price-result.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { TvsListComponent } from './components/tvs-list/tvs-list.component';


const routes: Routes = [

  { path: "", component: MainPageComponent },
  { path: "Laptops", component: LaptopsListComponent },
  { path: "Mobiles", component: MobilesListComponent },
  { path: "Electronics", component: ElectronicListComponent },
  { path: "TShirts", component: TShirtsListComponent },
  { path: "Shirts", component: ShirtsListComponent },
  { path: "Clothing", component: ClothingListComponent },
  {path:"Search/:keyword",component:SearchResultComponent,pathMatch:"full"},
  {path:"Price/:amount",component:PriceResultComponent},
  {path:"AddProducts",component:AddProductsComponent},
  {path:"TVs",component:TvsListComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    NgbModule,
    MatExpansionModule,
    CdkAccordionModule,
    FormsModule

  ],
  exports: [RouterModule, MatAccordion, MatExpansionModule]
})
export class AppRoutingModule { }
