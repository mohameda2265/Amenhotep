import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tower-details',
  templateUrl: './tower-details.component.html',
  styleUrls: ['./tower-details.component.css'],
})
export class TowerDetailsComponent implements OnInit {
  tid: number;
  tower;
  owner;
  constructor(private api: ApiService, private route: ActivatedRoute,private router : Router) {
    this.tid = +this.route.snapshot.paramMap.get('tid');
    this.tower = {
      Name: '',
      Number: '',
      Notes: '',
      Area: '',
      flatsNumber: '',
      floorsNumber: '',
      storesNumber: '',
      Cost: '',
      Type: '',
      owner: '',
    };
  }

  ngOnInit(): void {
    this.api.getTower(this.tid).subscribe(
      (data) => {
        this.tower = data;
        console.log(this.tower.owner);
        this.getOwnerData(this.tower.owner);
      },
      (error) => {
        console.log(error);
        alert('حدث خطأ فى الإتصال بالخادم');
      }
    );
  }
  getOwnerData(oid): void {
    this.api.getOwner(oid).subscribe(
      (data) => {
        this.owner = data;
        console.log(this.owner);
      },
      (error) => {
        console.log(error);
        alert('حدث خطأ فى الإتصال بالخادم');
      }
    );
  }
  logOut(){
    localStorage.removeItem('userToken');
    this.router.navigate(['login']);
  }
}
