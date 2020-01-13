import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class MRloginService {
    http: HttpClient
    url = 'http://localhost:4000/MRlogin'   //express port 4000


    constructor(private httpClient: HttpClient) {
        this.http = httpClient
     }
    
     login(email:String, password:String)
     {
        const body ={
             email:email,
             password:password
         }

         return this.http.post(this.url,body)
     }


}