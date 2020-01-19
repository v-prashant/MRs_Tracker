import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProductDetailsService {

    url = 'http://localhost:4000/login/dashboard/product/'

    constructor(private httpClient: HttpClient) { }
    

    getProduct(id: number)
    {
        return this.httpClient.get(this.url + id)
    }

}