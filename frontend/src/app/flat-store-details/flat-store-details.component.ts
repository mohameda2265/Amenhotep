import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-flat-store-details',
  templateUrl: './flat-store-details.component.html',
  styleUrls: ['./flat-store-details.component.css'],
})
export class FlatStoreDetailsComponent implements OnInit {
  fid: number;
  tower;
  block;
  compound;
  flat;
  owner;
  constructor(private api: ApiService, private route: ActivatedRoute,private router : Router) {
    this.flat = {
      flatNumber: '',
      floorNumber: '',
      tower: '',
      owner: '',
      Area: '',
      Inhabited: '',
    };
  }

  ngOnInit(): void {
    this.fid = +this.route.snapshot.paramMap.get('fid');
    console.log(this.fid);
    this.api.getFlat(this.fid).subscribe(
      (data) => {
        this.flat = data;
        console.log(this.flat.owner);
        console.log(this.flat.tower);
        this.getOwnerData(this.flat.owner);
        this.getTower(this.flat.tower);
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
  getTower(tid): void {
    this.api.getTower(tid).subscribe(
      (data) => {
        this.tower = data;
        console.log(this.tower);
        this.getBlock(this.tower.block);
      },
      (error) => {
        console.log(error);
        alert('حدث خطأ فى الإتصال بالخادم');
      }
    );
  }
  getBlock(bid): void {
    this.api.getBlock(bid).subscribe(
      (data) => {
        this.block = data;
        console.log(this.block);
        this.getCompound(this.block.compound);
      },
      (error) => {
        console.log(error);
        alert('حدث خطأ فى الإتصال بالخادم');
      }
    );
  }
  getCompound(cid): void {
    this.api.getCompund(cid).subscribe(
      (data) => {
        this.compound = data;
        console.log(this.compound);
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
