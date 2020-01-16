import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetProductService {

    url = 'http://localhost:4000/login/dashboard/product'
    constructor(private httpClient: HttpClient) { }
    

     getAllProducts() {
        return this.httpClient.get(this.url)
      }
    

     getproduct()
     {
         return this.httpClient.get(this.url)
     }
     
}