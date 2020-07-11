import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css'],
})
export class ShopDetailsComponent implements OnInit {
  sid: number;
  tower;
  block;
  compound;
  shop;
  ownerships = [];
  targetOwnershipID: number;
  targetOwnership = [];
  owners = [];
  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.shop = {
      Number: '',
      floorNumber: '',
      tower: '',
      Desc: '',
      Type: '',
    };
  }

  ngOnInit(): void {
    this.onInit();
  }
  getOwnerships(): void {
    this.api.getAllStoreOwnerships().subscribe(
      (data) => {
        this.ownerships = data;
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
  deleteOwnership(oid): void {
    this.ownerships.forEach((ownership) => {
      if (ownership.owner === oid && ownership.store === this.sid) {
        this.targetOwnershipID = ownership.id;
      }
    });
    this.api.deleteOwnership(this.targetOwnershipID).subscribe(
      (data) => {
        this.targetOwnership.push(data);
        this.onInit();
      },
      (error) => {
        console.log(error);
        alert('حدث خطا ما');
      }
    );
  }
  onInit(): void {
    this.sid = +this.route.snapshot.paramMap.get('sid');
    console.log(this.sid);
    this.api.getShop(this.sid).subscribe(
      (data) => {
        this.shop = data;
        console.log(this.shop.tower);
        this.getOwnerships();
        this.getTower(this.shop.tower);
      },
      (error) => {
        console.log(error);
        alert('حدث خطأ فى الإتصال بالخادم');
      }
    );
  }
}
