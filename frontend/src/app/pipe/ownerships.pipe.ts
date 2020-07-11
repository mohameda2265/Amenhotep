import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ownerships',
})
export class OwnershipsPipe implements PipeTransform {
  transform(value: any, sid: number): any {
    const owners: any[] = [];
    for (let i = 0; i < value.length; i++) {
      let storeNum: number = value[i].store;
      if (storeNum === sid) {
        owners.push(value[i]);
      }
    }
    return owners;
  }
}
