import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetProductService } from './user_home.component.service';

@Component({
    selector: 'userHome',
    templateUrl: './user_home.component.html',
    styleUrls: ['./user_home.component.css']
})

export class UserHomeComponent implements OnInit {

    Allproducts: any[]
    username: any

    constructor(private router:Router,
        private productservice:GetProductService,
        private service:GetProductService) { 
       this.loadflag()
        
       if(localStorage['login_status']!='0')
       {
        this.username = localStorage['username']
       }
       productservice.getproduct().subscribe((response)=>{
        if(response['status']=='success')
        {
            this.Allproducts = response['data']      
        }
        else{
            alert('error')
            console.log(response['error'])
            
        }
      })
         this.loadAllProducts()
    }

  loadAllProducts() {
    this.service
      .getAllProducts()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.Allproducts = response['data']
        } else {
          alert('error')
        }
      })
      localStorage['onBack'] = 'user'
  }


    loadflag()
    {
        if(localStorage['flag']=='0')
        {
            window.location.reload();
            localStorage['flag']='1'
        }
    }
    ngOnInit() { 
    
    }


  OnSelectProduct(id: number) {
    this.router.navigate(['/MRlogin/product_details/'+id])
  }

}

