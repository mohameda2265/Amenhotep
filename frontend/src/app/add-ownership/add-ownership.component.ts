import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-ownership',
  templateUrl: './add-ownership.component.html',
  styleUrls: ['./add-ownership.component.css'],
})
export class AddOwnershipComponent implements OnInit {
  selectedOwnership;
  owners;
  sid: number;
  constructor(
    private api: ApiService,
    private _location: Location,
    private route: ActivatedRoute
  ) {
    this.sid = +this.route.snapshot.paramMap.get('sid');
    this.selectedOwnership = [
      {
        owner: '',
        store: '',
      },
    ];
  }

  ngOnInit(): void {
    this.api.getAllOwners().subscribe(
      (data) => {
        this.owners = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addOwnership(): void {
    this.selectedOwnership.store = this.sid;
    console.log(this.selectedOwnership);
    this.api.addOwnership(this.selectedOwnership).subscribe(
      (data) => {
        this.selectedOwnership.push(data);
        this._location.back();
      },
      (error) => {
        console.log(error);
        alert('تأكد من صحة البيانات المدخلة');
      }
    );
  }
}
