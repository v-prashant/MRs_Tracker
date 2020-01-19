import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from './product_details.component.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'product_details',
    templateUrl: './product_details.component.html',
    styleUrls: ['./product_details.component.css']
})



export class ProductDetailsComponent implements OnInit {
    product: any
    count: number = 1
    rate: number
    temp: number

    constructor(private service:ProductDetailsService,
        private activateRoute:ActivatedRoute,
        private route:Router) {
      
        const id = this.activateRoute.snapshot.params['id']
      
        if(id)
        {
            this.service.getProduct(id).subscribe(response => {
                if(response['status']=='success')
                {
                    this.product = response['data'][0]
                    this.rate = this.product.priceWithDiscount
                    this.temp = this.rate
                }
            })

        }

     }


     OnIncrement()
     {
        this.count = this.count + 1
        this.rate = this.temp * this.count
     }

     OnDecrement()
     {
        if(this.count == 1)
        {
            alert('Can not decrement')
        }
        else
        {
            this.count = this.count -1
            this.rate = this.temp * this.count
        }
     }

     OnAddToCart()
     {

     }

     OnOrderNow()
     {

     }
     
     OnBack()
     {
        this.route.navigate(['/MRlogin/home'])
     }

    ngOnInit() { }
}