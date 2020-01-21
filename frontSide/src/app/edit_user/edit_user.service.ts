import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EditUserService {

    url = 'http://localhost:4000/login/dashboard/user/edit_user'

    constructor(private http: HttpClient) { }
    

    edit_movie(
        username: String,
        firstname: String,
        lastname: String,
        joindate: String,
        phoneno: String,
        email: String,
        password: String,
        id: number,
        exist:number
    )
    {
        const body={
            username:username,
            firstname:firstname,
            lastname:lastname,
            joindate:joindate,
            phoneno:phoneno,
            email:email,
            password:password,
            id:id,
            exist:exist
        }


    return this.http.put(this.url + '/' + id, body)
    }

    
    getUserDetails(id:number)
    {
        return this.http.get(this.url + '/' + id)
    }


}