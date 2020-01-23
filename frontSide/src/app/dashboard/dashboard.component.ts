import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    constructor(private router: Router) { }
    
    onlogout()
    {
        this.router.navigate(['/login'])
    }
    ngOnInit() { }
}