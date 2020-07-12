import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-control',
  templateUrl: './request-control.component.html',
  styleUrls: ['./request-control.component.css'],
})
export class RequestControlComponent implements OnInit {
  requests = [];
  constructor(private api: ApiService,private router : Router) {}

  ngOnInit(): void {
    this.api.getAllRequests().subscribe(
      (data) => {
        this.requests = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onInit(): void {
    this.api.getAllRequests().subscribe(
      (data) => {
        this.requests = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteRequest(rid): void {
    this.api.deleteRequest(rid).subscribe(
      (data) => {
        this.requests.push(data);
        this.onInit();
      },
      (error) => {
        console.log(error);
        this.onInit();
      }
    );
  }
  logOut(){
    localStorage.removeItem('userToken');
    this.router.navigate(['login']);
  }
}
