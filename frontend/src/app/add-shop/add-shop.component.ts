import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.css'],
})
export class AddShopComponent implements OnInit {
  selectedShop;
  towers;
  selectedOwnership;
  sid: number;
  constructor(
    private api: ApiService,
    private _location: Location,
    private route: ActivatedRoute,
    private router : Router
  ) {
    this.sid = +this.route.snapshot.paramMap.get('sid');
    this.selectedShop = [
      {
        Name: '',
        Number: '',
        floorNumber: '',
        tower: '',
        Desc: '',
        Type: '',
      },
    ];
    this.selectedShop.Type = 'shop';
  }

  ngOnInit(): void {
    if (this.sid) {
      this.api.getShop(this.sid).subscribe(
        (data) => {
          this.selectedShop = data;
        },
        (error) => {
          console.log(error);
          alert('حدث خطأ فى الإتصال');
        }
      );
    }
    this.api.getAllTowers().subscribe(
      (data) => {
        this.towers = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  handleRequest() {
    if (this.sid) {
      this.updateShop();
    } else {
      this.addShop();
    }
  }

  addShop() {
    this.api.addNewShop(this.selectedShop).subscribe(
      (data) => {
        this.selectedShop.push(data);
        this._location.back();
      },
      (error) => {
        console.log(error);
        alert('تأكد من صحة البيانات المدخلة');
      }
    );
  }

  updateShop() {
    this.api.updateShop(this.selectedShop, this.sid).subscribe(
      (data) => {
        this.selectedShop = data;
        this._location.back();
      },
      (error) => {
        console.log(error);
        alert('تأكد من صحة البيانات المدخلة');
      }
    );
  }
  logOut(){
    localStorage.removeItem('userToken');
    this.router.navigate(['login']);
  }
}
