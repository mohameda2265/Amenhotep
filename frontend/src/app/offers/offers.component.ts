import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  offers : any;
  constructor(private api : ApiService) { }

  ngOnInit(){
    this.api.getAllOffers().subscribe(data =>{
      this.offers = data;
      console.log(this.offers);
      
    })
  }
}
