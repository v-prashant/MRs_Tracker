import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomoeopathyService {

    url = 'http://localhost:4000/MRlogin/homoeopathy'
    constructor(private httpClient: HttpClient) { }
    

     getHomoeopathy() {
        return this.httpClient.get(this.url)
      }
    

      
}