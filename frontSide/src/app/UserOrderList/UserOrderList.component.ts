import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserOrderListService } from './UserOrderList.service';


@Component({
    selector: 'doctor-list',
    templateUrl: './UserOrderList.component.html',
    styleUrls: ['./UserOrderList.component.css']
})

export class UserOrderListComponent  {

    products: any[]
    mrid:number
    date:Date
   // status:String

    constructor(private router: Router,
        productservice: UserOrderListService,
        private service : UserOrderListService) {

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
      .getAllProducts(this.mrid)
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

    // your date logic here, recommend moment.js;
   // return moment(product.experationDate).isBefore(moment(currentdate));
    // or without using moment.js:
   // return product.experationDate.getTime() < currentdate.getTime();
    // or using Date
    return new Date(product.deliveryDate).valueOf() < new Date(currentdate).valueOf();
  }

}