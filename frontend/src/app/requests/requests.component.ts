import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  newRequest  ;
  constructor(private api : ApiService) {
    this.newRequest = {Title : '', Desc : '', Type : '',created_date:'', Email : '', Mobile : ''};
   }

  ngOnInit(): void {
  }
  createNewRequest(){
    this.api.createRequest(this.newRequest).subscribe(data =>{
      this.newRequest = data;
      console.log(this.newRequest);
      
    })
  }

}
