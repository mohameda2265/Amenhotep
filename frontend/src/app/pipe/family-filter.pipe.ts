import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'familyFilter'
})
export class FamilyFilterPipe implements PipeTransform {

  transform(value: any, pattern: string): any {
    const familyArray: any[] = [];
    for (let i = 0; i < value.length; i++) {
      let name: string = value[i].Name;
      console.log(name);
      console.log(pattern);
      if (name.includes(pattern)) {
        familyArray.push(value[i]);
      }
    }
    return familyArray;
  }

}
