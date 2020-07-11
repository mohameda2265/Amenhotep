import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.css'],
})
export class OwnerDetailsComponent implements OnInit {
  oid: number;
  owner;
  family = [];
  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.oid = +this.route.snapshot.paramMap.get('oid');
  }

  ngOnInit(): void {
    this.api.getOwner(this.oid).subscribe(
      (data) => {
        this.owner = data;
      },
      (error) => {
        console.log(error);
      }
    );
    this.api.getFamilyMembers().subscribe(
      (data) => {
        this.family = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
