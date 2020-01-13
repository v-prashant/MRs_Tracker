import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AddUserService } from '../add_user/adduser.service';
import { AddDRService } from './adddr.service';

@Component({
    selector: 'add-dr',
    templateUrl: './add_dr.component.html',
    styleUrls : ['./add_dr.component.css']
})
    
export class Add_drComponent implements OnInit {
    firstname: string
    lastname: string
    phoneNo: string
    degree: string


    service: AddDRService
    constructor(private router: Router,
        userservice: AddDRService) {
            this.service = userservice
         }

    back()
    {
        this.router.navigate(['/login/dashboard/drs'])
    }
    onadd()
    {
        this.service.addDR(this.firstname,this.lastname,
            this.phoneNo,this.degree).subscribe((response)=>{
                if(response['status']=='success')
                {
                    alert('added DR')
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