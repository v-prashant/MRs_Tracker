import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AyurvedicService {

    url = 'http://localhost:4000/MRlogin/ayurvedic'
    constructor(private httpClient: HttpClient) { }
    

     getAyurvedic() {
        return this.httpClient.get(this.url)
      }
    
     
}