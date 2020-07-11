import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  newRequest  ;
  avatar : File;
  alone;
  img;

  constructor(private api : ApiService) {
    this.newRequest = {Title : '', Desc : '', Type : '',created_date:'', Email : '', Mobile : ''};
   }

  ngOnInit(): void {
  }
  onImageChanged(event : any){
    this.avatar = event.target.files[0];
    // console.log(this.avatar.name);
    this.alone = new FormData();
    this.alone.append('Avatar' ,this.avatar , this.avatar.name);
    // console.log(this.alone.get('Avatar'));
    const formBody = [];
		for (const property in this.avatar) {
			const encodedKey = encodeURIComponent(property);
			const encodedValue = encodeURIComponent(this.avatar[property]);
			formBody.push(encodedKey + '=' + encodedValue);
		}
    this.img = formBody.join('&');
    console.log(this.img);
    console.log(formBody);
        
  }

  createNewRequest(){
    this.api.createRequest(this.newRequest, this.alone).subscribe(data =>{
      this.newRequest = data;
      console.log(this.newRequest);
      
    })
  }

}
