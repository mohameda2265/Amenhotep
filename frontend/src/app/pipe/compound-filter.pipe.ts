import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compoundFilter',
})
export class CompoundFilterPipe implements PipeTransform {
  transform(value: any, pattern: string): any {
    const compoundArray: any[] = [];
    for (let i = 0; i < value.length; i++) {
      let compoundName: string = value[i].Name;
      if (compoundName.includes(pattern)) {
        compoundArray.push(value[i]);
      }
    }
    return compoundArray;
  }
}
