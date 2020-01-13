
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AddDRService {
    http: HttpClient
    url = 'http://localhost:4000/login/dashboard/dr'   //express port 4000

    constructor(httpClient: HttpClient) {
        this.http = httpClient
     }

     
     addDR(
        firstname: string,
        lastname: string,
        phoneNo: string,
        degree: string ){
        
        const body = {
            firstname: firstname,
            lastname:  lastname,
            phoneNo:   phoneNo,
            degree:    degree
        }

        return this.http.post(this.url, body)
    } 
    deleteProduct(id: number) {
        return this.http.delete(this.url + '/' + id)
     } 
    getAllProducts() {
        return this.http.get(this.url)
    }
}