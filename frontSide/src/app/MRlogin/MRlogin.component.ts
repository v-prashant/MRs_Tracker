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

    constructor(private router: Router,
        private service: MRloginService) { }


    onlogin()
    {
        this.service.login(this.email,this.password).subscribe((response)=>{
                
        
                console.log(response)
                if(response['status']=='success')
                {
                    alert('hello')
                }
                else if(response['status']=='null')
                {
                    alert('enter the vaild password')
                }

           })

    }
 
    
}