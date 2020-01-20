import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SearchProductService } from './SearchProduct.component.service';


@Component({
    selector: 'SearchProduct',
    templateUrl: './SearchProduct.component.html',
    styleUrls: ['./SearchProduct.component.css']
})


export class SearchProductComponent implements OnInit {

    ProductName: String
    SearchArray: any
    msg:String
  //  username: any

    constructor(private router:Router,
        private productservice:SearchProductService,
        private service:SearchProductService) { 
       this.loadflag()
       this.loadAllProducts() 
    
    }

  loadAllProducts() {
    this.ProductName = localStorage['searchValue']
    this.service
      .getSearch(this.ProductName)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.SearchArray = response['data']
          if(this.SearchArray.length == 0)
          {
              this.msg = 'we did not find your matching result'
          }
          else{
              this.msg = 'we found these results'
          }
           
        } else {
          alert('error')
        }
      })

      localStorage['onBack'] = 'searchProduct'
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

