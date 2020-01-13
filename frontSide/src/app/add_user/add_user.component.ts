import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddUserService } from './adduser.service';

@Component({
    selector: 'add-user',
    templateUrl: './add_user.component.html',
    styleUrls : ['./add_user.component.css']
})

export class Add_userComponent implements OnInit {
    username: string
    firstname: string
    lastname: string
    joindate: string
    phoneno: string
    email: string 
    password: string

    service: AddUserService
    constructor(private router: Router,
        userservice: AddUserService ) { 
            this.service =  userservice
        }

    back()
    {
        this.router.navigate(['/login/dashboard/user'])
    }
    onadd()
    {
        this.service.addUsers(this.username,this.firstname,this.lastname,this.joindate,
            this.phoneno,this.email,this.password).subscribe((response)=>{
                if(response['status']=='success')
                {
                    alert('added user')
                }
                else
                {
                    console.log(response['error'])
                    alert('error')
                }
            })
    }
    ngOnInit() { }

}