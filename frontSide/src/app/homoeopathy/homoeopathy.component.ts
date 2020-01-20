import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomoeopathyService } from './homoeopathy.component.service';


@Component({
    selector: 'Homoeopathy',
    templateUrl: './homoeopathy.component.html',
    styleUrls: ['./homoeopathy.component.css']
})

export class HomoeopathyComponent implements OnInit {

    Homoeopathy: any[]
    username: any

    constructor(private router:Router,
        private productservice:HomoeopathyService,
        private service:HomoeopathyService) { 
        this.loadflag()
        this.loadAllProducts()
    }

  loadAllProducts() {
    this.service
      .getHomoeopathy()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.Homoeopathy = response['data']
        } else {
          alert('error')
        }
      })
      localStorage['onBack'] = 'homo'
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

