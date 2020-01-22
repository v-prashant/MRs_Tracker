
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MRordersListService {

    http: HttpClient
    url = 'http://localhost:4000/MRlogin/dashboard/MRorders'   //express port 4000
    url1 = 'http://localhost:4000/MRlogin/orders'
    constructor(httpClient: HttpClient) {
        this.http = httpClient
     }

     getAllProducts(id:number) {
         this.url = this.url + '/' +id
         console.log(this.url)
        return this.http.get(this.url)
      }
    


     deleteProduct(id: number) {
        
        this.url1 = this.url1+ '/'+id
        return this.http.delete(this.url1)
       
      }
    
}
