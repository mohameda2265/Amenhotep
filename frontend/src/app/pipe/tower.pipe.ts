import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tower',
})
export class TowerPipe implements PipeTransform {
  transform(value: any, bnum: number, tname: string): any {
    const towerArray: any[] = [];
    if (bnum && tname) {
      for (let i = 0; i < value.length; i++) {
        let blockNumber: number = value[i].block;
        let towerName: string = value[i].Name;
        if (blockNumber === bnum && towerName === tname) {
          towerArray.push(value[i]);
        }
      }
      return towerArray;
    } else if (tname && !bnum) {
      for (let i = 0; i < value.length; i++) {
        let towerName: string = value[i].Name;
        if (towerName === tname) {
          towerArray.push(value[i]);
        }
      }
      return towerArray;
    } else if (!tname && bnum) {
      for (let i = 0; i < value.length; i++) {
        let blockNumber: number = value[i].block;
        if (blockNumber === bnum) {
          towerArray.push(value[i]);
        }
      }
      return towerArray;
    }
  }
}
