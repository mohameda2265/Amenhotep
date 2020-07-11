import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  selectedEmployee;
  eid: number;
  constructor(
    private api: ApiService,
    private _location: Location,
    private route: ActivatedRoute
  ) {
    this.eid = +this.route.snapshot.paramMap.get('eid');
    this.selectedEmployee = [
      {
        NID: '',
        Name: '',
        Proof: '',
        Avatar: '',
        Birthdate: '',
        Mobile: '',
        DSL: '',
        jobDesc: '',
        Address: '',
      },
    ];
  }

  ngOnInit(): void {
    if (this.eid) {
      this.api.getEmployee(this.eid).subscribe(
        (data) => {
          this.selectedEmployee = data;
        },
        (error) => {
          console.log(error);
          alert('يوجد خطأ فى الإتصال أو البيانات');
        }
      );
    }
  }
  handleEmployee() {
    if (this.eid) {
      this.updateEmployee();
    } else {
      this.addEmployee();
    }
  }
  addEmployee() {
    this.api.addNewEmployee(this.selectedEmployee).subscribe(
      (data) => {
        this.selectedEmployee.push(data);
        this._location.back();
      },
      (error) => {
        console.log(error);
        alert('تأكد من صحة البيانات المدخلة');
      }
    );
  }

  updateEmployee() {
    this.api.updateEmployee(this.selectedEmployee, this.eid).subscribe(
      (data) => {
        this.selectedEmployee = data;
        this._location.back();
      },
      (error) => {
        console.log(error);
        alert('تأكد من صحة البيانات المدخلة');
      }
    );
  }
}
