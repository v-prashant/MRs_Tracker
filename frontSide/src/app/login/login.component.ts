import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';



@Component({
    selector: 'login-page',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    users: any[]

    constructor(private router: Router,
        userService: UserService,
        private service: UserService) {
            userService.getUsers().subscribe((response)=>{
                if(response['status']=='success')
                {
                    this.users = response['data']
                    
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
              this.users = response['data']
            } else {
              alert('error')
            }
          })
      }
  
   onUserSelect(id: number)
   {
      this.router.navigate(['/login/dashboard/user/edit_user/'+id])
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

    onAdduser()
    {
        this.router.navigate(['/login/dashboard/user/add_user'])
    }
    dashboard()
    {
        this.router.navigate(['/login/dashboard'])
    }

    onOrderList(id:number){
        this.router.navigate(['/MRlogin/dashboard/MRorders'+'/'+id])
    }

    ngOnInit() { }
}

