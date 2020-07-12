import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-block',
  templateUrl: './add-block.component.html',
  styleUrls: ['./add-block.component.css'],
})
export class AddBlockComponent implements OnInit {
  selectedBlock;
  compounds;
  bid;
  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private _location: Location
  ) {
    this.bid = +this.route.snapshot.paramMap.get('bid');
    this.selectedBlock = [
      {
        Number: '',
        Area: '',
        Desc: '',
        towersNumber: '',
        compound: '',
      },
    ];
  }
  ngOnInit(): void {
    if (this.bid) {
      this.api.getBlock(this.bid).subscribe(
        (data) => {
          this.selectedBlock = data;
        },
        (error) => {
          console.log(error);
          alert('تأكد من صحة البيانات المدخلة');
        }
      );
    }
    this.api.getAllCompunds().subscribe(
      (data) => {
        this.compounds = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  handleRequest(): void {
    if (this.bid) {
      this.updateBlock();
    } else {
      this.addBlock();
    }
  }

  addBlock() {
    this.api.addNewBlock(this.selectedBlock).subscribe(
      (data) => {
        this.selectedBlock.push(data);
        this._location.back();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateBlock() {
    this.api.updateBlock(this.selectedBlock, this.bid).subscribe(
      (data) => {
        this.selectedBlock = data;
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
