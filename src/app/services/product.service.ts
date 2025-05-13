import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://api.jsonserver.io/rushaan'; 
  private token = '4a8f08cb6a287713309a72a94ddd77b7';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const headers = new HttpHeaders({
      'X-Jsio-Token': this.token
    });

    return this.http.get<Product[]>(this.apiUrl, { headers });
  }
}