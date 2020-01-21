import { Component, OnInit } from '@angular/core';
import { EditUserService } from './edit_user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'edit_user-app',
    templateUrl: './edit_user.component.html',
    styleUrls: ['./edit_user.component.css']
})


export class Edit_userComponent implements OnInit {

  username = ''
  firstname = ''
  lastname = ''
  joindate = ''
  phoneno = ''
  email = ''
  password = ''
  id = 0
  exist = 0;

    constructor(private movieService: EditUserService,
        private service: EditUserService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {

            this.id = this.activatedRoute.snapshot.params['id']

            if(this.id)
            {
                this.service.getUserDetails(this.id).subscribe(response =>{
                    if(response['status']=='success')
                    {
            
                        const user = response['data']

                        this.username = user[0].username
                        this.firstname = user[0].firstname
                        this.lastname = user[0].lastname
                        this.joindate = user[0].joindate
                        this.phoneno = user[0].phoneno
                        this.email = user[0].email
                        this.password = user[0].password
                    }
                    else{
                        console.log(response['error'])
                    }
                })
            }
         }

    ngOnInit() { }


    onUpdate() {
        this.movieService
          .edit_movie(this.username, this.firstname, this.lastname, this.joindate, this.phoneno, this.email, this.password, this.id,this.exist)
          .subscribe(response => {
            if (response['status'] == 'success') {
                alert('user-updated')
              this.router.navigate(['/login/dashboard/user'])
            } else {
                console.log(response['error'])
                alert("error")
              //toastr.error(response['error'])
            }
          })
      }
}

