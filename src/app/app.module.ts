import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LaptopsListComponent } from './components/laptops-list/laptops-list.component';
import { MobilesListComponent } from './components/mobiles-list/mobiles-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ElectronicListComponent } from './components/electronic-list/electronic-list.component';
import { ClothingListComponent } from './components/clothing-list/clothing-list.component';
import { TShirtsListComponent } from './components/t-shirts-list/t-shirts-list.component';
import { ShirtsListComponent } from './components/shirts-list/shirts-list.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { FormsModule } from '@angular/forms';
import { PriceResultComponent } from './components/price-result/price-result.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { TvsListComponent } from './components/tvs-list/tvs-list.component';
import { SmartTvsListComponent } from './components/smart-tvs-list/smart-tvs-list.component';
import { NormalTvsListComponent } from './components/normal-tvs-list/normal-tvs-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainPageComponent,
    LaptopsListComponent,
    MobilesListComponent,
    ElectronicListComponent,
    ClothingListComponent,
    TShirtsListComponent,
    ShirtsListComponent,
    SearchResultComponent,
    PriceResultComponent,
    AddProductsComponent,
    TvsListComponent,
    SmartTvsListComponent,
    NormalTvsListComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
