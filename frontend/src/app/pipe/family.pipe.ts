import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'family',
  pure: false,
})
export class FamilyPipe implements PipeTransform {
  transform(value: any, oid: number): any {
    const familyArray: any[] = [];
    for (let i = 0; i < value.length; i++) {
      console.log(value[i]);
      let ownerID: number = value[i].owner;
      if (oid === ownerID) {
        familyArray.push(value[i]);
      }
    }
    return familyArray;
  }
}
