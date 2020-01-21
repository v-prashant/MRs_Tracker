
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class MRRegisterService {
    http: HttpClient
    url = 'http://localhost:4000/login/dashboard/user'   //express port 4000

     constructor(httpClient: HttpClient) {
        this.http = httpClient
     }

     
     addUsers( username: string,
        firstname: string,
        lastname: string,
        joindate: string,
        phoneno: string,
        email: string ,
        password: string){
        
        const body = {
            username: username,
            firstname: firstname,
            lastname:  lastname,
            joindate: joindate,
            phoneno:   phoneno,
            email:    email,
            password: password
        }

        return this.http.post(this.url, body)
    } 
        
}