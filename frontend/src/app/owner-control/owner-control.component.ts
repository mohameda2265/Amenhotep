import { ApiService } from './../api/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerFilterPipe } from '../pipe/owner-filter.pipe';

@Component({
  selector: 'app-owner-control',
  templateUrl: './owner-control.component.html',
  styleUrls: ['./owner-control.component.css'],
})
export class OwnerControlComponent implements OnInit {
  owners = [];
  pattern : string ;
  constructor(private api: ApiService,private router : Router,private pipe : OwnerFilterPipe) {}

  ngOnInit(): void {
    this.onInit();
  }
  // Refresh the page
  onInit(): void {
    this.api.getAllOwners().subscribe(
      (data) => {
        this.owners = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteOwner(oid): void {
    this.api.deleteOwner(oid).subscribe(
      (data) => {
        this.owners.push(data);
        this.onInit();
      },
      (error) => {
        console.log(error);
        alert('حدث خطأ ما');
      }
    );
  }

  searchOwners(pattern): void {
    console.log(pattern);
    if (pattern) {
      this.owners = this.pipe.transform(this.owners, pattern);
    } else {
      this.onInit();
    }
  }

  logOut(){
    localStorage.removeItem('userToken');
    this.router.navigate(['login']);
  }
}
