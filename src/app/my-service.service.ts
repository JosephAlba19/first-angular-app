import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, of, Observable } from 'rxjs';
import { myService } from './my-service';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }

  getStuff() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}
