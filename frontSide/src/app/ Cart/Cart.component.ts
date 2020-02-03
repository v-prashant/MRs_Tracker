import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from './Cart.component.service';

@Component({
    selector: 'product_details',
    templateUrl: './Cart.component.html',
    styleUrls: ['./Cart.component.css']
})


export class CartComponent implements OnInit {

    Cart:any
    TotalAmountOfProduct:number = 0;
    TotalSaved:number = 0;
    msg:String
    id = localStorage['id']
    empty: boolean
    
    constructor(private service:CartService,
        private activateRoute:ActivatedRoute,
        private route:Router) {
      
         
        this.loadProduct()

     }

    loadProduct()
    {
        this.service.getCart(this.id).subscribe(response =>{
            if(response['status'] == 'success'){
                this.Cart = response['data']
               
                //TO GET TOTAL MONEY AND SAVING
                
                if(this.Cart.length == 0){
                    this.msg = 'your cart is empty'
                    this.empty = true
                }
                else{
                    this.msg = 'your items list'
                    this.empty = false
                }
                for(let i = 0;i < this.Cart.length;i++)
                {
                    this.TotalAmountOfProduct = this.TotalAmountOfProduct + this.Cart[i].totalAmount
                    this.TotalSaved = this.TotalSaved + this.Cart[i].totalDiscount
                   
                } 


            }
            else{
                console.log(response['error'])
            }
        })
    }
    
    onEdit(id:number,tableid:number,quantity:number) {
        localStorage['orderDetailsTableID'] = tableid
        localStorage['Quantity'] = quantity
        this.route.navigate(['/MRlogin/cartEdit/'+id])
      }

    onOrderPlace(){
            this.route.navigate(['/MRlogin/cart/placeorder'])   
    }

    ngOnInit() { 

        if(localStorage['login_status'] != '1'){
            alert('you are not logged in')
            this.route.navigate(['/MRlogin'])
        }
    }

    
}

