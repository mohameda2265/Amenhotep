import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-block-details',
  templateUrl: './block-details.component.html',
  styleUrls: ['./block-details.component.css'],
})
export class BlockDetailsComponent implements OnInit {
  block;
  bid: number;
  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.bid = +this.route.snapshot.paramMap.get('bid');
    this.block = {
      compound: '',
      Number: '',
      Desc: '',
      Area: '',
      towersNumber: '',
    };
  }

  ngOnInit(): void {
    this.api.getBlock(this.bid).subscribe(
      (data) => {
        this.block = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
