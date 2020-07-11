import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-flat',
  templateUrl: './add-flat.component.html',
  styleUrls: ['./add-flat.component.css'],
})
export class AddFlatComponent implements OnInit {
  selectedFlat;
  towers;
  owners;
  fid: number;
  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private _location: Location
  ) {
    this.fid = +this.route.snapshot.paramMap.get('fid');
    this.selectedFlat = [
      {
        Number: '',
        Area: '',
        owner: '',
        floorNumber: '',
        Inhabited: '',
        tower: '',
      },
    ];
    this.selectedFlat.Inhabited = false;
  }

  ngOnInit(): void {
    if (this.fid) {
      this.api.getFlat(this.fid).subscribe(
        (data) => {
          this.selectedFlat = data;
        },
        (error) => {
          console.log(error);
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
    this.api.getAllOwners().subscribe(
      (data) => {
        this.owners = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  handleRequest(): void {
    if (this.fid) {
      this.updateFlat();
    } else {
      this.addFlat();
    }
  }

  updateFlat() {
    this.api.updateFlat(this.selectedFlat, this.fid).subscribe(
      (data) => {
        this.selectedFlat = data;
        this._location.back();
      },
      (error) => {
        console.log(error);
        alert('تأكد من صحة البيانات المدخلة');
      }
    );
  }

  addFlat() {
    this.api.addNewFlat(this.selectedFlat).subscribe(
      (data) => {
        this.selectedFlat.push(data);
        this._location.back();
        console.log(this.selectedFlat);
      },
      (error) => {
        console.log(error);
        alert('تأكد من صحة البيانات المدخلة');
      }
    );
  }
}
