import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://jsonplaceholder.typicode.com';


  getService():Observable<any>
  {
     return this.http.get(`${this.baseUrl}/todos`);
  }
}
