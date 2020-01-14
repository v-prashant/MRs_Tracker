import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { MRloginService } from './MRlogin.service';



@Component({
    selector: 'MR-login',
    templateUrl: './MRlogin.component.html',
    styleUrls: ['./MRlogin.component.css']
})

export class MRloginComponent {
    email = ''
    password = ''
    rememberme = false
   // isLoggedIn = false

   

    constructor(private router: Router,
        private service: MRloginService) { }

    onlogin()
    {
        
        this.service.login(this.email,this.password).subscribe((response)=>{
                
            
                console.log(response)
                if(response['status']=='success')
                {
                   // this.isLoggedIn = true
                   if(this.rememberme)
                   {
                        localStorage['login_status'] = '1'
                        localStorage['username'] = response['data'][0].username
                        localStorage['id'] = response['data'][0].id
                        localStorage['flag'] = '0'

                   }
                
                    this.router.navigate(['/MRlogin/home'])
                }
                else if(response['status']=='error')
                {

                    alert('invaild email or password')
                }

           })

    }
 
    
}