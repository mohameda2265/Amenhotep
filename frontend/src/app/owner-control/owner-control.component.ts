import { ApiService } from './../api/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-control',
  templateUrl: './owner-control.component.html',
  styleUrls: ['./owner-control.component.css'],
})
export class OwnerControlComponent implements OnInit {
  owners = [];
  constructor(private api: ApiService) {}

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
}
