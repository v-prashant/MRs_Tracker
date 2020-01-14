import { Component } from '@angular/core';
import { CanActivate,Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements CanActivate {


  title = 'MRTracker';
  isLoggedIn = false

  status = localStorage['login_status']

  constructor(private router:Router)
  {
    this.loadStatus()
  }


  canActivate()
  {  
      this.loadStatus()
      return true
  }
 

  loadStatus()
  {
      if(this.status == '1')
      {
        this.isLoggedIn = true
      }
  }

  onLogout()
  {
    this.isLoggedIn = false
    localStorage['login_status'] = '0'
  }

}
