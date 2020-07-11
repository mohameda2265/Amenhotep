import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  eid: number;
  employee;
  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.eid = +this.route.snapshot.paramMap.get('eid');
  }

  ngOnInit(): void {
    this.api.getEmployee(this.eid).subscribe(
      (data) => {
        this.employee = data;
      },
      (error) => {
        console.log(error);
        alert('حدث خطأ فى اللإتصال');
      }
    );
  }
}
