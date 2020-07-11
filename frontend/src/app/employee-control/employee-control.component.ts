import { ApiService } from './../api/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-control',
  templateUrl: './employee-control.component.html',
  styleUrls: ['./employee-control.component.css'],
})
export class EmployeeControlComponent implements OnInit {
  employees = [];
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.onInit();
  }
  onInit(): void {
    this.api.getAllEmployees().subscribe(
      (data) => {
        this.employees = data;
      },
      (error) => {
        console.log(error);
        alert('حدث خطأ فى الإتصال أو البيانات');
      }
    );
  }
  deleteEmployee(eid): void {
    this.api.deleteEmployee(eid).subscribe(
      (data) => {
        this.employees.push(data);
        this.onInit();
      },
      (error) => {
        console.log(error);
        alert('حدث خطأ ما فى الإتصال بالخادم');
      }
    );
  }
}
