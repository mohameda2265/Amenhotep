import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-compound',
  templateUrl: './add-compound.component.html',
  styleUrls: ['./add-compound.component.css'],
})
export class AddCompoundComponent implements OnInit {
  selectedCompound;
  cid: number;
  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private _location: Location
  ) {
    this.cid = +this.route.snapshot.paramMap.get('cid');
    this.selectedCompound = [
      {
        Number: '',
        Name: '',
        Address: '',
        Latitude: '',
        Longitude: '',
        Area: '',
        Desc: '',
      },
    ];
  }

  ngOnInit(): void {
    if (this.cid) {
      this.api.getCompund(this.cid).subscribe(
        (data) => {
          this.selectedCompound = data;
        },
        (error) => {
          console.log(error);
          alert('تأكد من صحة البيانات المدخلة');
        }
      );
    }
  }

  handleRequest(): void {
    if (this.cid) {
      this.updateCompound();
    } else {
      this.addCompound();
    }
  }

  addCompound() {
    this.api.addNewCompund(this.selectedCompound).subscribe(
      (data) => {
        this.selectedCompound.push(data);
        this._location.back();
      },
      (error) => {
        console.log(error);
        alert('تأكد من صحة البيانات المدخلة');
      }
    );
  }

  updateCompound() {
    this.api.updateCompound(this.selectedCompound, this.cid).subscribe(
      (data) => {
        this.selectedCompound = data;
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
