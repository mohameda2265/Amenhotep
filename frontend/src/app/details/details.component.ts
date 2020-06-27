import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
obj : any;
one : any;
  constructor(private route : ActivatedRoute,private api : ApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(data=>{
      this.obj = data.id;
      console.log(this.obj);
      
    });
    this.api.getOneNews(this.obj).subscribe(data =>{
      this.one = data;
      console.log(data);
      
      console.log(this.one);
    })

}
}
