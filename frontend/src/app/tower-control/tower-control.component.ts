import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TowerPipe } from './../pipe/tower.pipe';

@Component({
  selector: 'app-tower-control',
  templateUrl: './tower-control.component.html',
  styleUrls: ['./tower-control.component.css'],
})
export class TowerControlComponent implements OnInit {
  towers = [];
  blockNumber: number;
  towerName: string;
  constructor(private api: ApiService, private pipe: TowerPipe,private router : Router) {}

  ngOnInit(): void {
    this.onInit();
  }

  onInit(): void {
    this.api.getAllTowers().subscribe(
      (data) => {
        this.towers = data;
      },
      (error) => {
        console.log(error);
        alert('حدث خطأ ما');
      }
    );
  }

  deleteTower(tid): void {
    this.api.deleteTower(tid).subscribe(
      (data) => {
        this.towers.push(data);
        this.onInit();
      },
      (error) => {
        console.log(error);
        alert('حدث خطا ما');
      }
    );
  }
  searchTowers(bnum, tname): void {
    if (bnum || tname) {
      this.towers = this.pipe.transform(this.towers, bnum, tname);
    } else {
      this.onInit();
    }
  }
  logOut(){
    localStorage.removeItem('userToken');
    this.router.navigate(['login']);
  }
}
