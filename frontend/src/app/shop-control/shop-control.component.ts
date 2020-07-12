import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopPipe } from './../pipe/shop.pipe';

@Component({
  selector: 'app-shop-control',
  templateUrl: './shop-control.component.html',
  styleUrls: ['./shop-control.component.css'],
})
export class ShopControlComponent implements OnInit {
  shops = [];
  shopName: string;
  towerNumber: number;
  constructor(private api: ApiService, private pipe: ShopPipe,private router : Router) {}

  ngOnInit(): void {
    this.onInit();
  }

  onInit(): void {
    this.api.getAllShops().subscribe(
      (data) => {
        this.shops = data;
        console.log(this.shops);
      },
      (error) => {
        console.log(error);
        alert('حدث خطأ ما');
      }
    );
  }

  deleteShop(sid): void {
    this.api.deleteShop(sid).subscribe(
      (data) => {
        this.shops.push(data);
        this.onInit();
      },
      (error) => {
        console.log(error);
        alert('حدث خطا ما');
      }
    );
  }
  searchShops(sname, tnum): void {
    if (sname || tnum) {
      this.shops = this.pipe.transform(this.shops, sname, tnum);
    } else {
      this.onInit();
    }
  }
  logOut(){
    localStorage.removeItem('userToken');
    this.router.navigate(['login']);
  }
}
