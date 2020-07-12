import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.css'],
})
export class AddOwnerComponent implements OnInit {
  selectedOwner;
  oid: number;
  constructor(
    private api: ApiService,
    private _location: Location,
    private route: ActivatedRoute,
    private router : Router
  ) {
    this.oid = +this.route.snapshot.paramMap.get('oid');
    this.selectedOwner = [
      {
        NID: '',
        Name: '',
        Proof: '',
        Avatar: '',
        Birthdate: '',
        Mobile: '',
        DSL: '',
        Type: '',
        Notes: '',
      },
    ];
    this.selectedOwner.Type = 'own';
  }

  ngOnInit(): void {
    if (this.oid) {
      this.api.getOwner(this.oid).subscribe(
        (data) => {
          this.selectedOwner = data;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  handleOwner() {
    if (this.oid) {
      this.updateOwner();
    } else {
      this.addOwner();
    }
  }

  addOwner() {
    this.api.addNewOwner(this.selectedOwner).subscribe(
      (data) => {
        this.selectedOwner.push(data);
        this._location.back();
      },
      (error) => {
        console.log(error);
        alert('تأكد من صحة البيانات المدخلة');
      }
    );
  }

  updateOwner() {
    this.api.updateOwner(this.selectedOwner, this.oid).subscribe(
      (data) => {
        this.selectedOwner = data;
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
