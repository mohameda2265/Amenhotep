import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-tower',
  templateUrl: './add-tower.component.html',
  styleUrls: ['./add-tower.component.css'],
})
export class AddTowerComponent implements OnInit {
  selectedTower;
  tid: number;
  owners;
  blocks;
  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private _location: Location
  ) {
    this.tid = +this.route.snapshot.paramMap.get('tid');
    this.selectedTower = [
      {
        Number: '',
        Name: '',
        Area: '',
        Desc: '',
        flatsNumber: '',
        floorsNumber: '',
        stroresNumber: '',
        Cost: '',
        Type: '',
        Notes: '',
        block: '',
        owner: '',
      },
    ];
    this.selectedTower.Type = 'residential';
  }

  ngOnInit(): void {
    if (this.tid) {
      this.api.getTower(this.tid).subscribe(
        (data) => {
          this.selectedTower = data;
        },
        (error) => {
          console.log(error);
        }
      );
    }
    this.api.getAllOwners().subscribe(
      (data) => {
        this.owners = data;
      },
      (error) => {
        console.log(error);
      }
    );
    this.api.getAllBlocks().subscribe(
      (data) => {
        this.blocks = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  handleRequest() {
    if (this.tid) {
      this.updateTower();
    } else {
      this.addTower();
    }
  }

  addTower() {
    this.api.addNewTower(this.selectedTower).subscribe(
      (data) => {
        this.selectedTower.push(data);
        this._location.back();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateTower() {
    this.api.updateTower(this.selectedTower, this.tid).subscribe(
      (data) => {
        this.selectedTower = data;
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
