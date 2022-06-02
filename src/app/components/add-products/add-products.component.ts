import { Component, OnInit } from '@angular/core';
import { ClothingService } from 'src/app/services/clothing.service';
import { MainService } from 'src/app/services/main.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  category="";
  elctronicsType:boolean=false;
  clothingType=false;
  appliancesType=false;
  productType:string=""
  productName:string=""
  productPrice:number=0
  selectedFile:File;

  productElectronic:any={
    "name":"",
    "ram":0,
    "rom":0,
    "price":0,
    "pi":{
      "imageName":"",
      "size":100
    },
    "screenSize":"",
    "productType":""
  }
  productClothing:any={
    "name":"",
    "size":"",
    "colour":"",
    "price":0,
    "pci":{
      "imageName":"",
      "size":100
    },
    "sleeves":"",
    "productType":""
  }
  constructor(private ser:MainService,private clothingService:ClothingService) { }

  ngOnInit(): void {
    
  }

  selectedFiles(event){
this.selectedFile=<File>event.target.files[0];
  }

  onCategory(res:any){
    console.log(this.category);
    
    console.log(res.target.value);
    if(res.target.value=="Electronics"){
     this.elctronicsType=true;
     this.clothingType=false;
     this.appliancesType=false;
    }
    else if(res.target.value=="Clothing"){
      this.elctronicsType=false;
      this.clothingType=true;
      this.appliancesType=false;
    }
    else if(res.target.value=="Appliances"){
      this.elctronicsType=false;
      this.clothingType=false;
      this.appliancesType=true;
    }
  }
  saveData(){
    if(this.category=="Clothing"){
      this.saveClothingProduct();
    }
    else if(this.category=="Electronics"){
      this.productElectronic.name=this.productName
    this.productElectronic.price=this.productPrice
    this.productElectronic.productType=this.productType
    this.productElectronic.pi.imageName=this.selectedFile.name
      this.ser.saveElectronic(this.productElectronic).subscribe((res)=>{
        console.log(res);
        Swal.fire(
          {
            icon:'success',
            title:'Product Added Successfully',
            text:'You can earn money from your product now.'
          },
        ).then((result)=>{
          if(result.value){
           this.productElectronic=null;
           
          }
         
        })
        
      })
    }
    
    
  
    
    const imageData=new FormData()
    imageData.append("image",this.selectedFile);
    this.ser.saveImage(imageData).subscribe((res)=>{
      console.log(res);
      
    })

  }

  public saveClothingProduct(){

    this.productClothing.name=this.productName
    this.productClothing.price=this.productPrice
    this.productClothing.productType=this.productType
    this.productClothing.pci.imageName=this.selectedFile.name

    this.clothingService.saveClothing(this.productClothing).subscribe((res)=>{

      console.log(res);
      
    })


  }


}
