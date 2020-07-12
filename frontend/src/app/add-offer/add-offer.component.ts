import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, formatDate } from '@angular/common';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css'],
})
export class AddOfferComponent implements OnInit {
  selectedOffer;
  constructor(
    private api: ApiService,
    private _location: Location,
    private route: ActivatedRoute,
    private router : Router
  ) {
    this.selectedOffer = [
      {
        Title: '',
        Desc: '',
        Avatar: '',
        Cost: '',
        Installement: '',
        minPayment: '',
        Duration: '',
      },
    ];
  }

  ngOnInit(): void {}
  addOffers() {
    this.api.addOffers(this.selectedOffer).subscribe(
      (data) => {
        this.selectedOffer.push(data);
        this._location.back();
      },
      (error) => {
        console.log(error);
        console.log(this.selectedOffer);
        alert('تأكد من صحة البيانات المدخلة');
      }
    );
  }
  logOut(){
    localStorage.removeItem('userToken');
    this.router.navigate(['login']);
  }
}
