

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AddProductService {
    http: HttpClient
    url = 'http://localhost:4000/login/dashboard/product'   //express port 4000
    url1 = 'http://localhost:4000/category' 

    constructor(httpClient: HttpClient, private http1:HttpClient) {
        this.http = httpClient
     }

     
     addService( 
        name: string,
        price: string,
        discount: string,
        priceWithDiscount: string,
        doseInMG: string ,
        mgfdate: string,
        expiredate: string,
        description: string,
        image: any,
        categoryid: string    
        ){
        
        const body = new FormData()
        body.append('name', name)
        body.append('price',price)
        body.append('discount',discount)
        body.append('priceWithDiscount',priceWithDiscount)
        body.append('doseInMG',doseInMG)
        body.append('mgfdate',mgfdate)
        body.append('expiredate',expiredate)
        body.append('description',description)
        body.append('image',image)
        body.append('categoryid',categoryid)

        return this.http.post(this.url, body)
    } //end of addservive
        
    getCategories()
    {
        return this.http1.get(this.url1)
    }

}