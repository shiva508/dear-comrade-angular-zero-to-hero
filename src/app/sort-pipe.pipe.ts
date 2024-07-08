import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPipe',
  standalone: true,
  pure: false,
})
export class SortPipePipe implements PipeTransform {
  transform(value: string[] | number[], sortType: 'asc' | 'desc' = 'asc') {
    const sorted = [...value];
    return sorted.sort((inputOne, inputTwo) => {
      if (sortType === 'asc') {
        return inputOne > inputTwo ? 1 : -1;
      } else {
        return inputOne > inputTwo ? -1 : 1;
      }
    });
    return sorted;
  }
}
