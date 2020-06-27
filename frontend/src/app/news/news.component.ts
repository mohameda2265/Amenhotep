import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news : any;
  constructor(private api : ApiService) { }

  ngOnInit(){
    this.api.getAllNews().subscribe(data =>{
      this.news = data;
      console.log(this.news);
    })
  }

}
