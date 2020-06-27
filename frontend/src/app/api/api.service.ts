import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8080";
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

  getAllNews(): Observable<any>{
    return this.http.get(this.baseurl + '/api/news/' , {headers : this.httpHeaders});
  }

  getOneNews(id): Observable<any>{
    return this.http.get(this.baseurl + '/api/news/' + id + '/' , {headers : this.httpHeaders});
  }

  getAllOffers(): Observable<any>{
    return this.http.get(this.baseurl + '/api/offers/' , {headers : this.httpHeaders});
  }

  getOneOffer(id): Observable<any>{
    return this.http.get(this.baseurl + '/api/offers/' + id + '/' , {headers : this.httpHeaders});
  }

}