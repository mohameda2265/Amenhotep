import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'block',
  pure: false,
})
export class BlockPipe implements PipeTransform {
  transform(value: any, cnum: number, bnum: number): any {
    const blockArray: any[] = [];
    if (cnum && bnum) {
      for (let i = 0; i < value.length; i++) {
        let blockNumber: number = value[i].id;
        let compoundNumber: number = value[i].compound;
        if (blockNumber === bnum && compoundNumber === cnum) {
          blockArray.push(value[i]);
        }
      }
      return blockArray;
    } else if (cnum && !bnum) {
      for (let i = 0; i < value.length; i++) {
        let compoundNumber: number = value[i].compound;
        if (compoundNumber === cnum) {
          blockArray.push(value[i]);
        }
      }
      return blockArray;
    } else if (!cnum && bnum) {
      for (let i = 0; i < value.length; i++) {
        let blockNumber: number = value[i].id;
        let compoundNumber: number = value[i].compound;
        if (blockNumber === bnum) {
          blockArray.push(value[i]);
        }
      }
      return blockArray;
    }
  }
}
