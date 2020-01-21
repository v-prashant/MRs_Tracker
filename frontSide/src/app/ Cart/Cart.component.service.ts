import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CartService {

    url='http://localhost:4000/MRlogin/addcart'

    constructor(private httpClient: HttpClient) { }
    
    getCart(mrid:number)
    {      
        const body = {
            mrid:mrid
        }
        return this.httpClient.post(this.url,body)
    }



}