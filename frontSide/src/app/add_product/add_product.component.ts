import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddProductService } from './add_product.service';

@Component({
    selector: 'add-product',
    templateUrl: './add_product.component.html',
    styleUrls : ['./add_product.component.css']
})

export class Add_productComponent implements OnInit {

    cat = []

    categoryid = ''
    name: string
    price: string
    discount: string
    priceWithDiscount: string
    doseInMG: string
    mgfdate: string
    expiredate: string
    description: string
    image: any

    service: AddProductService
    constructor(private router: Router,
        productservice: AddProductService,
        private catservice:AddProductService) { 
            this.service = productservice
        }

    back()
    {
        this.router.navigate(['/login/dashboard/product'])
    }
    addProduct()
    {
        
        this.service.addService(this.name,this.price, this.discount, this.priceWithDiscount,
        this.doseInMG,this.mgfdate,this.expiredate,this.description,this.image,this.categoryid
        ).subscribe((response)=>{
                if(response['status']=='success')
                {
                    alert('added product')
                }
                else
                {
                    console.log(response['error'])
                    alert('error')
                }
            })
    }



    ngOnInit() {
        this.loadCategories()
     }

     loadCategories(){
         this.catservice.getCategories().subscribe(response =>{
             if(response['status']=='success')
             {
                 this.cat = response['data']
                
                 if(this.cat.length > 0)
                   this.categoryid = this.cat[0].id
             }
         })
     }

     onSelectImage(event)
     {
         this.image = event.target.files[0]
     }
}