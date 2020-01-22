
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserOrderListService {

    http: HttpClient
    url = 'http://localhost:4000/MRlogin/orders'   //express port 4000

    constructor(httpClient: HttpClient) {
        this.http = httpClient
     }

     getAllProducts(mrid:number) {
         const body = {
             mrid:mrid
         }
        return this.http.post(this.url,body)
      }
    
     deleteProduct(id: number) {
        
        this.url = this.url+ '/'+id
        return this.http.delete(this.url)
       
      }
    
}
