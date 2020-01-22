import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllOrderListService } from './AllOrderList.service';



@Component({
    selector: 'All-order-list',
    templateUrl: './AllOrderList.component.html',
    styleUrls: ['./AllOrderList.component.css']
})

export class AllOrderListComponent  {

    products: any[]
    mrid:number
    date:Date
   // status:String

    constructor(private router: Router,
        productservice: AllOrderListService,
        private service : AllOrderListService) {

         this.loadAllProducts()
         
    }
 

    ondelete(id: number) {
      console.log(id)
      if(confirm('Are you sure to delete an item'))
      {
          this.service
            .deleteProduct(id)
            .subscribe(response => {
              if (response['status'] == 'success') {
                window.location.reload()
                //this.loadAllProducts()
              } else {
                console.log(response['error'])
              }
            })
        }
      }

  loadAllProducts() {

    this.date = new Date()
  
    this.mrid = localStorage['id']
    this.service
      .getAllProducts()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.products = response['data']
          
        } else {
          alert('error')
        }
      })
  }

  isexpire(product) {

    const currentdate= new Date()

    return new Date(product.deliveryDate).valueOf() < new Date(currentdate).valueOf();
  }

}