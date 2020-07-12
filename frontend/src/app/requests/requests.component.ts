import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { error } from 'protractor';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css'],
})
export class RequestsComponent implements OnInit {
  newRequest;
  submitted = false;
  constructor(private api: ApiService) {
    this.newRequest = [
      {
        Title: '',
        Desc: '',
        Type: '',
        created_date: '',
        Email: '',
        Mobile: '',
      },
    ];
    this.newRequest.Type = 'طلب';
  }

  ngOnInit(): void {}
  createNewRequest() {
    this.api.createRequest(this.newRequest).subscribe(data =>{
      this.newRequest = data;
      console.log(this.newRequest);
        this.submitted = true;
        window.location.reload();
      },
      (error) => {
        console.log(error);
        alert('يوجد خطأ فى البيانات ');
        this.submitted = false;
      }
    );
  }
}
