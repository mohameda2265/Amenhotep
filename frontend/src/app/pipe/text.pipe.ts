import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'text',
})
export class TextPipe implements PipeTransform {
  transform(value: string): string {
    let result: string = '';
    if (value === 'father') result = 'أب';
    else if (value === 'mother') result = 'أم';
    else if (value === 'brother') result = 'أخ';
    else if (value === 'sister') result = 'أخت';
    else if (value === 'cousin') result = 'ابن عم';
    else if (value === 'aunt') result = 'عمة/خالة';
    else if (value === 'uncle') result = 'عم/خال';
    else if (value === 'husband') result = 'زوج';
    else if (value === 'wife') result = 'زوجة';
    else if (value === 'daughter') result = 'ابنه';
    else if (value === 'son') result = 'ابن';
    else if (value === 'restaurant') result = 'مطعم';
    else if (value === 'cafe') result = 'كافيه';
    else if (value === 'mall') result = 'مول';
    else if (value === 'shop') result = 'متجر';
    else if (value === 'gym') result = 'صالة رياضية';
    return result;
  }
}
