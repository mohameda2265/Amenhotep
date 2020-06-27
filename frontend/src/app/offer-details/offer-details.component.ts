import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {
  obj : any;
  one : any;
    constructor(private route : ActivatedRoute,private api : ApiService) { }
  
    ngOnInit(): void {
      this.route.params.subscribe(data=>{
        this.obj = data.id;
        console.log(this.obj);
        
      });
      this.api.getOneOffer(this.obj).subscribe(data =>{
        this.one = data;
        console.log(data);
        
        console.log(this.one);
      })
  
  }
  }
