import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {formatDate } from '@angular/common';

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

  createRequest(newRequest,avatar): Observable<any>{
    const today= new Date();
    let img ;
    let nowDate = '';
    let test = '';
    let z = "Z";
    test = formatDate(today, 'yyyy-MM-ddThh:mm:00', 'en-US', 'zzzz');
    nowDate = test + z;
    console.log(newRequest);
    console.log(avatar.get('Avatar'));
    // img = 'http://127.0.0.1:8080/media/images/' + avatar.get('Avatar').name;
    // console.log(img);    
    const body = {Title : newRequest.title, Desc : newRequest.desc,
      Type : newRequest.type ,created_date : nowDate,
      Email : newRequest.email , Mobile : newRequest.mobile,
      Avatar : avatar.get('Avatar')};
      console.log(body);      
    return this.http.post(this.baseurl + '/api/requests/new/', body , {headers : this.httpHeaders});
  }

  loginUser(userData): Observable<any>{
    const body = { username : userData.username , password : userData.password }
    return this.http.post(this.baseurl + '/api/login/' , body , {headers : this.httpHeaders});
  }

}