import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shop',
})
export class ShopPipe implements PipeTransform {
  transform(value: any, sname: string, tnum: number): any {
    const shopsArray: any[] = [];
    if (sname && tnum) {
      for (let i = 0; i < value.length; i++) {
        let shopName: string = value[i].Name;
        let towerNumber: number = value[i].tower;
        if (shopName === sname && towerNumber === tnum) {
          shopsArray.push(value[i]);
        }
      }
      return shopsArray;
    } else if (tnum && !sname) {
      for (let i = 0; i < value.length; i++) {
        let towerNumber: number = value[i].tower;
        if (towerNumber === tnum) {
          shopsArray.push(value[i]);
        }
      }
      return shopsArray;
    } else if (!tnum && sname) {
      for (let i = 0; i < value.length; i++) {
        let shopName: string = value[i].Name;
        if (shopName === sname) {
          shopsArray.push(value[i]);
        }
      }
      return shopsArray;
    }
  }
}
