import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Injectable()
export class EditProductService {

    url = 'http://localhost:4000/login/dashboard/product/edit_product'

    constructor(private http: HttpClient) { }
    

    edit_Product(
        name: String,
        price: number,
        discount: number,
        priceWithDiscount: number,
        doseInMG: Number,
        mgfdate: Date,
        expiredate: Date,
        description: String,
        id: number
    )
    {
        const body={
            name:name,
            price:price,
            discount:discount,
            priceWithDiscount:priceWithDiscount,
            doseInMG:doseInMG,
            mgfdate:mgfdate,
            expiredate:expiredate,
            description:description,
            id:id
        }


    return this.http.put(this.url + '/' + id, body)
    }

    
    getUserDetails(id:number)
    {
        return this.http.get(this.url + '/' + id)
    }


}