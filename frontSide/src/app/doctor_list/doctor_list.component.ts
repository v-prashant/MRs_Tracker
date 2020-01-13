import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DrService } from './dr.service';

@Component({
    selector: 'doctor-list',
    templateUrl: './doctor_list.component.html',
    styleUrls: ['./doctor_list.component.css']
})

export class DoctorComponent  {

    drs: any[]

    constructor(private router: Router,
        drservice: DrService,
        private service: DrService) {

            drservice.getdr().subscribe((response)=>{
                if(response['status']=='success')
                {
                    this.drs = response['data']         
                }
                else{
                    alert('error')
                    console.log(response['error'])
                    
                }
         })
    }


    loadAllProducts() {
        this.service
          .getAllProducts()
          .subscribe(response => {
            if (response['status'] == 'success') {
              this.drs = response['data']
            } else {
              alert('error')
            }
          })
      }
    
   ondelete(productId: number) {
    this.service
      .deleteProduct(productId)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.loadAllProducts()
        } else {
          console.log(response['error'])
        }
      })
  }
    onAddDR()
    {
        this.router.navigate(['/login/dashboard/drs/add_dr'])
    }
    dashboard()
    {
        this.router.navigate(['/login/dashboard'])
    }


}