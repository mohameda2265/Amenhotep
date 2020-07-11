import { BlockPipe } from '../pipe/block.pipe';
import { ApiService } from './../api/api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-control',
  templateUrl: './block-control.component.html',
  styleUrls: ['./block-control.component.css'],
})
export class BlockControlComponent implements OnInit {
  blocks = [];
  cid: number;
  bid: number;
  blockNumber: number;
  compoundNumber: number;
  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private pipe: BlockPipe
  ) {}

  ngOnInit(): void {
    this.cid = +this.route.snapshot.paramMap.get('cid');
    this.onInit();
  }
  deleteBlock(bid): void {
    this.api.deleteBlock(bid).subscribe(
      (data) => {
        this.blocks.push(data);
        this.onInit();
      },
      (error) => {
        console.log(error);
        alert('حدث خطا ما');
      }
    );
  }

  onInit(): void {
    this.api.getAllBlocks().subscribe(
      (data) => {
        this.blocks = data;
      },
      (error) => {
        console.log(error);
        alert('حدث خطأ ما');
      }
    );
  }
  searchBlocks(cnum, bnum): void {
    if (cnum || bnum) {
      this.blocks = this.pipe.transform(this.blocks, cnum, bnum);
    } else {
      this.onInit();
    }
  }
}
