
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DrService {
    http: HttpClient
    url = 'http://localhost:4000/login/dashboard/dr'   //express port 4000

    constructor(httpClient: HttpClient) {
        this.http = httpClient
     }

     getdr()
     {
         return this.http.get(this.url)
     }

     getAllProducts() {
        return this.http.get(this.url)
      }
     deleteProduct(id: number) {
        return this.http.delete(this.url + '/' + id)
      }

}