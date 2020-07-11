import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flat',
})
export class FlatPipe implements PipeTransform {
  transform(value: any, fnum: number, tnum: number): any {
    const flatsArray: any[] = [];
    if (fnum && tnum) {
      for (let i = 0; i < value.length; i++) {
        let flatNumber: number = value[i].Number;
        let towerNumber: number = value[i].tower;
        if (flatNumber === fnum && towerNumber === tnum) {
          flatsArray.push(value[i]);
        }
      }
      return flatsArray;
    } else if (tnum && !fnum) {
      for (let i = 0; i < value.length; i++) {
        let towerNumber: number = value[i].tower;
        if (towerNumber === tnum) {
          flatsArray.push(value[i]);
        }
      }
      return flatsArray;
    } else if (!tnum && fnum) {
      for (let i = 0; i < value.length; i++) {
        let flatNumber: number = value[i].Number;
        if (flatNumber === fnum) {
          flatsArray.push(value[i]);
        }
      }
      return flatsArray;
    }
  }
}
