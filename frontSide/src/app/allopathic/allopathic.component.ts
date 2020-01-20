import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllopathicService } from './allopathic.component.service';


@Component({
    selector: 'allopathic',
    templateUrl: './allopathic.component.html',
    styleUrls: ['./allopathic.component.css']
})

export class AllopathicComponent implements OnInit {

    allopathic: any[]
    username: any

    constructor(private router:Router,
        private productservice:AllopathicService,
        private service:AllopathicService) { 
       this.loadflag()
        
        this.loadAllProducts()
    }

  loadAllProducts() {
    this.service
      .getAllopathic()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.allopathic = response['data']
        } else {
          alert('error')
        }
      })
      localStorage['onBack'] = 'allopathic'
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

