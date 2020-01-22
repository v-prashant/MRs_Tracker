import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartProductDetailsService } from './CartProductDetails.component.service';

@Component({
    selector: 'Cartproduct_details',
    templateUrl: './CartProductDetails.component.html',
    styleUrls: ['./CartProductDetails.component.css']
})

export class CartProductDetailsComponent implements OnInit {
    product: any
    count: number = 1
    rate: number
    temp: number
    id: number
    totalDiscount: number
    MRid:number
    orderDetailsTableID:number

    constructor(private service:CartProductDetailsService,
        private activateRoute:ActivatedRoute,
        private cartService: CartProductDetailsService,
        private route:Router) {
      
        this.id = this.activateRoute.snapshot.params['id']
      
        if(this.id)
        {
            this.service.getProduct(this.id).subscribe(response => {
                if(response['status']=='success')
                {
                    this.product = response['data'][0]
                    this.rate = this.product.priceWithDiscount
                    this.temp = this.rate
                }
            })

        }

            this.count = Number(localStorage['Quantity'])
     }


     OnIncrement()
     {
        this.count = this.count + 1
        this.rate = this.temp * this.count
     }

     OnDecrement()
     {
        if(this.count == 0)
        {
            alert('Can not decrement')
        }
        else
        {
            this.count = this.count -1
            this.rate = this.temp * this.count
        }
     }

     onAddToCart()
     {
         if(localStorage['login_status'] == '0'){
            alert('You need to login first')
            this.route.navigate(['/MRlogin'])
         }
         else
         {
                this.MRid = localStorage['id']
                this.orderDetailsTableID = localStorage['orderDetailsTableID']
                this.totalDiscount = (this.product.price * this.count) - this.rate

            if(this.count != 0)
            {
                this.cartService.postInCart(this.count,this.rate,this.totalDiscount,this.MRid,this.id,this.orderDetailsTableID)
               .subscribe(response =>{
                if(response['status'] == 'success'){
                    alert('item updated')
                    this.route.navigate(['MRlogin/cart'])
                  }
                    })

            }
            else{
                this.cartService.DeleteFromCart(this.orderDetailsTableID)
                .subscribe(response => {
                    if(response['status'] == 'success'){
                        alert('item updated')
                        this.route.navigate(['MRlogin/cart'])
                    }
                })
            }


        }
     }

     OnOrderNow()
     {

     }
     
     

    ngOnInit() { }
}

