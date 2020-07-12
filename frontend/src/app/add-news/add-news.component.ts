import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, formatDate } from '@angular/common';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css'],
})
export class AddNewsComponent implements OnInit {
  selectedNews;
  nid: number;

  constructor(
    private api: ApiService,
    private _location: Location,
    private route: ActivatedRoute,
    private router : Router
  ) {
    this.selectedNews = [
      {
        Title: '',
        Desc: '',
        Avatar: '',
      },
    ];
  }

  handleFileInput(imageInput: any) {}

  ngOnInit(): void {
    if (this.nid) {
      this.api.getOneNews(this.nid).subscribe(
        (data) => {
          this.selectedNews = data;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  handleOwner() {
    if (this.nid) {
      this.updateNews();
    } else {
      this.addNews();
    }
  }

  addNews() {
    this.api.addNews(this.selectedNews).subscribe(
      (data) => {
        this.selectedNews.push(data);
        this._location.back();
      },
      (error) => {
        console.log(error);
        alert('تأكد من صحة البيانات المدخلة');
      }
    );
  }

  updateNews() {
    this.api.updateNews(this.selectedNews, this.nid).subscribe(
      (data) => {
        this.selectedNews = data;
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
