import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ownerFilter'
})
export class OwnerFilterPipe implements PipeTransform {

  transform(value: any, pattern: string): any {
    const ownerArray: any[] = [];
    for (let i = 0; i < value.length; i++) {
      let ownerName: string = value[i].Name;
      if (ownerName.includes(pattern)) {
        ownerArray.push(value[i]);
      }
    }
    return ownerArray;
  }

}
