import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-compound-details',
  templateUrl: './compound-details.component.html',
  styleUrls: ['./compound-details.component.css'],
})
export class CompoundDetailsComponent implements OnInit {
  cid: number;
  compound;
  constructor(private api: ApiService, private route: ActivatedRoute,private router : Router) {
    this.cid = +this.route.snapshot.paramMap.get('cid');
    this.compound = {
      Name: '',
      Number: '',
      Desc: '',
      Area: '',
      Latitude: '',
      Longitude: '',
      Address: '',
    };
  }

  ngOnInit(): void {
    this.api.getCompund(this.cid).subscribe(
      (data) => {
        this.compound = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  logOut(){
    localStorage.removeItem('userToken');
    this.router.navigate(['login']);
  }
}
