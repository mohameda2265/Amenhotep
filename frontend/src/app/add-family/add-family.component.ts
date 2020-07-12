import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-family',
  templateUrl: './add-family.component.html',
  styleUrls: ['./add-family.component.css'],
})
export class AddFamilyComponent implements OnInit {
  selectedMember;
  oid: number;
  constructor(
    private api: ApiService,
    private _location: Location,
    private route: ActivatedRoute,
    private router : Router
  ) {
    this.oid = +this.route.snapshot.paramMap.get('oid');
    this.selectedMember = [
      {
        NID: '',
        Name: '',
        Proof: '',
        Birthdate: '',
        Relationship: '',
      },
    ];
    this.selectedMember.Type = 'wife';
  }

  ngOnInit(): void {}

  addFamilyMember() {
    this.api.addNewFamilyMember(this.selectedMember, this.oid).subscribe(
      (data) => {
        this.selectedMember.push(data);
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
