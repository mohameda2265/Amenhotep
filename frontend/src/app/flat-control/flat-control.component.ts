import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FlatPipe } from './../pipe/flat.pipe';
@Component({
  selector: 'app-flat-control',
  templateUrl: './flat-control.component.html',
  styleUrls: ['./flat-control.component.css'],
})
export class FlatControlComponent implements OnInit {
  flats = [];
  flatNumber: number;
  towerNumber: number;
  cid: number;
  bid: number;
  tid: number;
  constructor(private api: ApiService, private pipe: FlatPipe,private router : Router) {}

  ngOnInit(): void {
    this.onInit();
  }

  onInit(): void {
    this.api.getAllFlats().subscribe(
      (data) => {
        this.flats = data;
      },
      (error) => {
        console.log(error);
        alert('حدث خطأ ما');
      }
    );
  }

  deleteFlat(fid): void {
    this.api.deleteFlat(fid).subscribe(
      (data) => {
        this.flats.push(data);
        this.onInit();
      },
      (error) => {
        console.log(error);
        alert('حدث خطا ما');
      }
    );
  }
  searchFlats(fnum, tnum): void {
    if (fnum || tnum) {
      this.flats = this.pipe.transform(this.flats, fnum, tnum);
    } else {
      this.onInit();
    }
  }
  logOut(){
    localStorage.removeItem('userToken');
    this.router.navigate(['login']);
  }
}
