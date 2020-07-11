import { ApiService } from './../api/api.service';
import { CompoundFilterPipe } from './../pipe/compound-filter.pipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compound-control',
  templateUrl: './compound-control.component.html',
  styleUrls: ['./compound-control.component.css'],
})
export class CompoundControlComponent implements OnInit {
  compounds = [];
  pattern: string;
  constructor(private api: ApiService, private cpipe: CompoundFilterPipe) {}

  deleteCompound(cid): void {
    this.api.deleteCompound(cid).subscribe(
      (data) => {
        this.compounds.push(data);
        this.onInit();
      },
      (error) => {
        console.log(error);
        alert('حدث خطا ما');
      }
    );
  }

  onInit(): void {
    this.api.getAllCompunds().subscribe(
      (data) => {
        this.compounds = data;
      },
      (error) => {
        console.log(error);
        alert('حدث خطأ ما');
      }
    );
  }

  ngOnInit(): void {
    this.onInit();
  }

  searchCompounds(pattern): void {
    console.log(pattern);
    if (pattern) {
      this.compounds = this.cpipe.transform(this.compounds, pattern);
    } else {
      this.onInit();
    }
  }
}
