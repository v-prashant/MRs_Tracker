import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MRRegisterService } from './MRRegister.service';


@Component({
    selector: 'MRregister',
    templateUrl: './MRRegister.component.html',
    styleUrls : ['./MRRegister.component.css']
})

export class MRRegisterComponent implements OnInit {
    username: string =''
    firstname: string =''
    lastname: string =''
    joindate: string = '1990/01/01'
    phoneno: string =''
    email: string = ''
    password: string =''

    service: MRRegisterService
    constructor(private router: Router,
        userservice: MRRegisterService ) { 
            this.service =  userservice
        }

    onadd()
    {
        if(this.username.length == 0){
            alert('username is required')
        }
        else if(this.firstname.length == 0){
            alert('firstname is required')
        }
        else if(this.lastname.length == 0){
            alert('lastname is required')
        }
        else if(this.phoneno.length == 0){
            alert('phone number is required')
        }
        else if(this.email.length == 0){
            alert('email is required')
        }
        else if(this.password.length ==0){
            alert('password is required')
        }
        else{

        

        this.service.addUsers(this.username,this.firstname,this.lastname,this.joindate,
            this.phoneno,this.email,this.password).subscribe((response)=>{
                if(response['status']=='success')
                {
                    alert('you have successfully register')
                    this.router.navigate(['/MRlogin'])
                }
                else
                {
                    console.log(response['error'])
                    alert('error')
                }
            })

        }
    }
    ngOnInit() { }

}