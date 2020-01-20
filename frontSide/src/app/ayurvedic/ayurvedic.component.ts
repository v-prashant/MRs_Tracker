import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AyurvedicService } from './ayurvedic.component.service';



@Component({
    selector: 'ayurvedic',
    templateUrl: './ayurvedic.component.html',
    styleUrls: ['./ayurvedic.component.css']
})

export class AyurvedicComponent implements OnInit {

    Ayurvedic: any[]
    username: any

    constructor(private router:Router,
        private productservice:AyurvedicService,
        private service:AyurvedicService) { 
       this.loadflag()
      this.loadAllProducts()
    }

  loadAllProducts() {
    this.service
      .getAyurvedic()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.Ayurvedic = response['data']
        } else {
          alert('error')
        }
      })
      localStorage['onBack'] = 'ayurvedic'
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

