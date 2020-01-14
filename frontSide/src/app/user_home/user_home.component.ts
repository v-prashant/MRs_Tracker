import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'userHome',
    templateUrl: './user_home.component.html',
    styleUrls: ['./user_home.component.css']
})

export class UserHomeComponent implements OnInit {


    constructor() { 
       this.loadflag()
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
}