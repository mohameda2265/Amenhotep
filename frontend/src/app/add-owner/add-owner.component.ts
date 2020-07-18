import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.css'],
})
export class AddOwnerComponent implements OnInit {
  selectedOwner;
  oid: number;
  selectedImage:File=null;
  imgSrc: string ="assets/images/1.png";
  constructor(
    private api: ApiService,
    private _location: Location,
    private route: ActivatedRoute,
    private router : Router
  ) {
    this.oid = +this.route.snapshot.paramMap.get('oid');
    this.selectedOwner = [
      {
        NID: '',
        Name: '',
        Code: '',
        // Proof: '',
        // Avatar: '',
        Birthdate: '',
        Mobile: '',
        DSL: '',
        Type: '',
        Notes: '',
      },
    ];
    this.selectedOwner.Type = 'own';
  }

  ngOnInit(): void {
    if (this.oid) {
      this.api.getOwner(this.oid).subscribe(
        (data) => {
          this.selectedOwner = data;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  handleOwner() {
    if (this.oid) {
      this.updateOwner();
    } else {
      this.addOwner();
    }
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      // reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else {
      // this.imgSrc ="assets/img/image-placeholder.jpg" ;
      
      this.selectedImage = null;
    }
  }

  addOwner() {
    console.log(this.selectedOwner);
    console.log(this.selectedImage);
    this.api.addNewOwner(this.selectedOwner,this.selectedImage).subscribe(
      (data) => {
        this.selectedOwner.push(data);
        this._location.back();
      },
      (error) => {
        console.log(error);
        alert('تأكد من صحة البيانات المدخلة');
      }
    );
  }

  updateOwner() {
    this.api.updateOwner(this.selectedOwner, this.oid).subscribe(
      (data) => {
        this.selectedOwner = data;
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
